exports.createPages = async ({ graphql, actions, reporter }) => {
  const { data } = await graphql(`
    query {
      eightbase {
        postsList {
          items {
            id
            createdAt
            slug
            title
            published
          }
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panic('failed to get posts data', data.errors);
  }

  // create an "alias" to shorten up the path to data items
  const posts = data.eightbase.postsList.items;

  // create a 'detail' page for each post
  posts.forEach(post => {
    actions.createPage({
      // Each page is required to have a `path` and a template `component`.
      // The `context` is optional but is often necessary so the template
      // can query data specific to each page.
      path: post.slug,
      component: require.resolve(`./src/templates/post-detail.js`),
      context: {
        slug: `/${post.slug}/`
      }
    });
  });
};

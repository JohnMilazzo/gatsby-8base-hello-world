const path = require(`path`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      eightbase {
        postsList {
          items {
            id
            createdAt
            title
            published
          }
        }
      }
    }
  `);

  // get the template into which we'll put the data
  const pageTemplate = path.resolve(`./src/templates/post-detail.js`);

  // create a 'detail' page for each post
  data.eightbase.postsList.items.forEach(post => {
    /* replace spaces or special characters with a dash */
    let urlTitle = post.title;
    urlTitle = urlTitle.replace(/\W+/g, '-');

    actions.createPage({
      // Each page is required to have a `path` and a template `component`.
      // The `context` is optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${urlTitle}/k/${post.id}/`,
      component: pageTemplate,
      context: {
        id: post.id
      }
    });
  });
};

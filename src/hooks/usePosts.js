import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      eightbase {
        postsList {
          items {
            id
            slug
            title
            published
          }
        }
      }
    }
  `);

  return data.eightbase.postsList.items.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    published: post.published
  }));
};

export default usePosts;

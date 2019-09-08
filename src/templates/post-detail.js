import React from 'react';
// import { graphql } from 'gatsby';

import Layout from '../layouts';

const PostDetail = ({ pageContext }) => (
  <Layout>
    <h1>Post Detail</h1>
    <div>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  </Layout>
);

export default PostDetail;

// export const pageQuery = graphql`
//   query {
//     eightbase {
//       post(id: "ck05mwfgi004v01jnedgl3zhq") {
//         id
//         slug
//         title
//         body
//         published
//       }
//     }
//   }
// `;

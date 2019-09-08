import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts';

const PostDetail = ({
  data: {
    eightbase: { post }
  },
  pageContext
}) => (
  <Layout>
    <h1>{post.title}</h1>
    <div>Published: {post.published}</div>
    <div>
      <p>{post.body}</p>
    </div>
    <div></div>
  </Layout>
);

export default PostDetail;

export const pageQuery = graphql`
  query($id: ID!) {
    eightbase {
      post(id: $id) {
        id
        title
        body
        published
      }
    }
  }
`;

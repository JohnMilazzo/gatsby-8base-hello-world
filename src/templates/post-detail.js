import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts';

class Item extends React.Component {
  render() {
    const { post } = this.props.data;

    return (
      <Layout>
        <h3>Book Detail</h3>
        <div>
          <a href={post.title}>{post.title}</a>
          <p>Published: {post.published}</p>
          <p>
            <div>XXXXX</div>
          </p>
        </div>
      </Layout>
    );
  }
}

export default Item;

export const pageQuery = graphql`
  query {
    eightbase {
      post(id: "ck05mwfgi004v01jnedgl3zhq") {
        id
        title
        published
      }
    }
  }
`;

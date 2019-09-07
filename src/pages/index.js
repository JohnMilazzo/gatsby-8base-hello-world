import React from 'react';
import { graphql } from 'gatsby';

import PostListItem from '../components/post-list-item';
import Layout from '../layouts';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <div>
        <h1>Page - Title</h1>
        <h3>Post List:</h3>

        {posts.map(post => (
          <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </Layout>
  );
};

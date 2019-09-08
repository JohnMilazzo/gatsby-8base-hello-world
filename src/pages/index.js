import React from 'react';

import PostListItem from '../components/post-list-item';
import Layout from '../layouts';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <div>
        <h1>Page Title</h1>
        <h2>Post List:</h2>

        {posts.map(post => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

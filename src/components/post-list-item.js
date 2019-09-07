import React from 'react';
import { Link } from 'gatsby';

const PostListItem = ({ post }) => (
  <article>
    <h3>{post.title}</h3>
    <Link to={post.slug}>read this post &rarr;</Link>
  </article>
);

export default PostListItem;

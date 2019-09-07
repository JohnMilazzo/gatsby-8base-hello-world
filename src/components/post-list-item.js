import React from 'react';
import { Link } from 'gatsby';

class PostListItem extends React.Component {
  render() {
    const { post } = this.props;

    /* replace spaces or special characters with a dash */
    let urlTitle = post.title;
    urlTitle = urlTitle.replace(/\W+/g, '-');

    return (
      <li>
        <div>
          <a href={post.title}>{post.title}</a> —{` `}
          <Link to={`/${urlTitle}/k/${post.xid}/`}>more details</Link>
        </div>
      </li>
    );
  }
}

export default PostListItem;

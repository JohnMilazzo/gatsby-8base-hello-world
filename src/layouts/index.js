import React from 'react';
import { Link } from 'gatsby';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>

        {this.props.children}

        <hr />

        <p>
          The src for this website is at
          {` `}
          <a href="https://github.com/johnmilazzo/gatsby-8base">
            https://github.com/johnmilazzo/gatsby-8base
          </a>
        </p>
      </div>
    );
  }
}

export default DefaultLayout;

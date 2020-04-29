import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Footer = props => (

    <h3>Hello from footer</h3>
);

export default props => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => <Footer data={data} />}
    />
);

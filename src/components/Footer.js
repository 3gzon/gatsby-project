import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Footer = props => (
  <footer>
    <p>Copyright &copy; 2020 Your Company
        	| Designed by <em>Template Mo</em></p>
  </footer>
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

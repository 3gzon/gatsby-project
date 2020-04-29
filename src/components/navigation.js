import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
// import logoLinks from '../images/gatsby-icon.png';
import '../styles/base.scss';
const Navigation = (props) => {
    const { menuLinks } = props.data.site.siteMetadata;
    return (
        <div className="cd-slider-nav">
            <nav>
                <span className="cd-marker item-1"></span>
                <ul>
                    {menuLinks.map(link => (
                        <li key={link.name}>
                            <Link to={link.link}>
                                <div className="image-icon" alt="logo">
                                    {/* <img className="img-fluid" src={logoLinks} /> */}
                                </div>
                                <h6>{link.name}</h6>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default props => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
        render={data => <Navigation data={data} />}
    />
);

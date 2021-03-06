module.exports = {
  siteMetadata: {
    title: `Test Gatsby Page`,
    description: `Test Gatsby Page to learn how to use Gatsby documentation`,
    author: `Egzon Uka`,
    menuLinks: [
      {
        name: 'Welcome',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/about',
      },
      {
        name: 'Featured',
        link: '/featured',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Contact Us',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

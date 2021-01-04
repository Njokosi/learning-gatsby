/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Learning gatsby',
    description: 'How to get started with gatsby',
    author: '@jones',
    data: ['first item', 'second item'],
    person: { name: 'jones', age: 25 },
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bliyqk3zrofa`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `hvMqV90wUtcov5-Vxa_ct8WixGUuybCIH5FEQGQEWO8`,
      },
    },
  ],
};

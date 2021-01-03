/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: "Learning gatsby",
    description: "How to get started with gatsby",
    author: "@jones",
    data: ['first item', 'second item'],
    person: { name: 'jones', age: 25 }
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

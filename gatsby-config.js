require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-image",
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'new-test-repository',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          articles: require('./custom_types/articles.json'),
          blogwithtwonews: require('./custom_types/blogwithtwonews.json'),
        },
      },
    },
  ]
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'new-test-repository',
        accessToken: 'MC5ZUEtqYlJJQUFDZ0EtcWZJ.M18677-9De-_ve-_ve-_vVIY77-9WwPvv71EKgsC77-977-9Re-_vRQx77-977-977-9eO-_ve-_ve-_ve-_vQ',
      },
      schemas: {
        arcitles: require('./schemes/articles.json')
      },
    },
   
  ],
}

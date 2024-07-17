/**
 * @type {import('gatsby').GatsbyConfig}
 */
  console.log(process.env.NODE_ENV)
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`

})
const clientConfig = require('./client-config')
  const token = process.env.SANITY_READ_TOKEN
  const isProd = process.env.NODE_ENV === 'production'
  
  module.exports = {
    siteMetadata: {
      title: `hof-gatsby-sanity`,
      siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [ "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
        graphqlTag: 'default',
      }
    },]
  };

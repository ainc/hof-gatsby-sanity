/**
 * @type {import('gatsby').GatsbyConfig}
 */

const enableDev = process.env.enableDev === 'true';

if (enableDev) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`

  })
  const token = process.env.SANITY_READ_TOKEN
  const isProd = process.env.NODE_ENV === 'development'
  
  module.exports = {
    siteMetadata: {
      title: `hof-gatsby-sanity`,
      siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [{
      resolve: 'gatsby-source-sanity',
      options: {
        "projectId": "b1gnc6rj",
        "dataset": "development",

        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
  };
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'production'}`
  })
  const token = process.env.SANITY_READ_TOKEN
  const isProd = process.env.NODE_ENV === 'production'
  
  module.exports = {
    siteMetadata: {
      title: `hof-gatsby-sanity`,
      siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [{
      resolve: 'gatsby-source-sanity',
      options: {
        "projectId": "b1gnc6rj",
        "dataset": "production",
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
  };
}
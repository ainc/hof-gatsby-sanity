/**
 * @type {import('gatsby').GatsbyConfig}
 */

// Disable Netlify adapter to prevent build failures
if (!process.env.GATSBY_CONTINUE_BUILD_ON_MISSING_ADAPTER) {
  process.env.GATSBY_CONTINUE_BUILD_ON_MISSING_ADAPTER = "true";
}

console.log(process.env.NODE_ENV);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `hof-gatsby-sanity`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
        graphqlTag: "default",
      },
    },
  ],
};

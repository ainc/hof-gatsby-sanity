const { gatsbyFunction } = require('./gatsbyFunction')
  const { createRequestObject, createResponseObject } = require('./utils')
  const { resolve } = require("path");

  const pageRoot = resolve(__dirname, "../../..");
  exports.handler = (((appDir) =>
function handler(
  event,
  context,
) {
  // Create a fake Gatsby/Express Request object
  const req = createRequestObject({ event, context })

  return new Promise((resolve) => {
    try {
      // Create a stubbed Gatsby/Express Response object
      // onResEnd is the "resolve" cb for this Promise
      const res = createResponseObject({ onResEnd: resolve })
      // Try to call the actual function
      gatsbyFunction(req, res, event, appDir)
    } catch (error) {
      console.error(`Error executing ${event.path}`, error)
      resolve({ statusCode: 500 })
    }
  })
})(pageRoot))
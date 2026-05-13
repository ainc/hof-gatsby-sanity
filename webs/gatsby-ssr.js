/**
 * Netlify sets Referrer-Policy: strict-origin-when-cross-origin on the live site.
 * `gatsby develop` does not, so YouTube embed 153 cannot be reproduced locally by default.
 *
 * Run with SIMULATE_NETLIFY_REFERRER=true to inject the same default policy via <meta name="referrer">.
 *
 * PowerShell: $env:SIMULATE_NETLIFY_REFERRER="true"; yarn develop
 * bash:       SIMULATE_NETLIFY_REFERRER=true yarn develop
 */
exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.SIMULATE_NETLIFY_REFERRER === "true") {
    setHeadComponents([
      <meta
        key="simulate-netlify-referrer"
        name="referrer"
        content="strict-origin-when-cross-origin"
      />,
    ]);
  }
};

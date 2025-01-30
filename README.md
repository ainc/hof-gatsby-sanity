# hof-gatsby-sanity

## Big Picture Goal
Remake [the Hall of Fame website](https://www.entrepreneurhof.com/) using React, Gatsby, and Sanity.

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick Start (Using Yarn)

1. **Install dependencies (in the root folder).**  
    yarn install

2. **Start developing (Gatsby site).**  
   - Navigate to the `webs` folder and run:  
        cd webs  
        yarn develop  
   - Your site should be running at http://localhost:8000

3. **Open the code and start customizing!**  
   - Your Gatsby code is in the `webs` folder.
   - Any changes will hot-reload in the browser.

## Sanity Workflow

Sanity can overwrite schema changes if multiple branches modify schemas simultaneously. To avoid issues:

1. Plan out all necessary schema for development.
2. Add the new schema, commit, and push to the `main` branch on GitHub.
3. Redeploy the GraphQL API:  
    yarn workspace studio deploy-graphql  
   (or run the same command from the `studio` folder if preferred).
4. Other users should pull the updated schema before adding any new schema.
5. Continue front-end development using the updated schema.

## Learn More About Gatsby

- Documentation: https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  
- Tutorials: https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  
- Guides: https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  
- API Reference: https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  
- Plugin Library: https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  
- Cheat Sheet: https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter  

## 🚀 Quick Start (Netlify)

You can deploy this starter with one click on Netlify:

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Sanity Clean Content Studio

Congratulations! You have installed the Sanity Content Studio, which is a real-time content editing environment connected to the Sanity backend.

You can do the following:

- Read the “getting started” docs: https://www.sanity.io/docs/introduction/getting-started?utm_source=readme  
- Join the community Slack: https://slack.sanity.io/?utm_source=readme  
- Extend and build plugins: https://www.sanity.io/docs/content-studio/extending?utm_source=readme  

## Making Changes to Production Structure

1. Make changes in the Sanity Studio that affect the production structure.
2. Transfer those changes to the development database by running:  
    cd studio  
    yarn clone  

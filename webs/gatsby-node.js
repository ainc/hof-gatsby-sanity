const path = require("path");

async function createInducteeBioPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allSanityInductee {
        edges {
          node {
            inductee {
              company
              name
              profilePhoto {
                asset {
                  gatsbyImageData
                }
              }
              title
              year
            }
            inductionCeremonyVideo
            profileVideo
            profileVideoImage {
              asset {
                gatsbyImageData
              }
            }
            InductionVideoImage {
              asset {
                gatsbyImageData
              }
            }
            bio {
              children {
                text
                marks
              }
              _key
              _type
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  //Create individual blog post
  const postEdges = result.data.allSanityInductee.edges;
  const inducteeBio = path.resolve("./src/templates/inductees/inductee-bio.js");

  postEdges.forEach((edge) => {
    // const id = edge.node.id;
    const path = `/${edge.node.slug.current}`;

    createPage({
      path: path,
      component: inducteeBio,
      context: {
        post: edge.node,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createInducteeBioPages(graphql, actions);
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
  );
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
};

const path = require("path")

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
          slug {
            current
          }
          bio {
            children {
              text
            }
          }
        }
      }
    }
  }`);

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
                post: node, 
            },
        });
    });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    await createInducteeBioPages(graphql, actions)
}
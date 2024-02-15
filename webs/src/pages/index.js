import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
  console.log(data.allSanityInductee.totalCount);
  const allSanityInductee = (data.allSanityInductee.nodes);

  return (
    <div>
    {allSanityInductee.map((node, index) => (
      <div>
      <h1>{node.name}</h1>
      <p>{node.company}</p>
      <GatsbyImage image={node.profilePhoto.asset.gatsbyImageData} className='rounded-circle' alt={node.name}/>
      <p>{node.bio}</p>
      </div>
    ))}
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allSanityInductee {
      nodes {
        name
        company
        profilePhoto {
          asset {
            gatsbyImageData(height: 300, width: 300)
          }
        }
        bio
      }
    }
  }
`;


export default IndexPage

export const Head = () => <title>Home Page</title>

import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard"
import '../styles/main.scss'
const IndexPage = ({data}) => {
  console.log(data.allSanityInductee);
  const allSanityInductee = data.allSanityInductee.nodes;

  return (
    <div>
    <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap'}}>
      {allSanityInductee.map((node, index) => (
        <li key={index}>
          <InducteeCard img={node.profilePhoto.asset.gatsbyImageData} name={node.name} company={node.company} />
        </li>
      ))}
    </ul>
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

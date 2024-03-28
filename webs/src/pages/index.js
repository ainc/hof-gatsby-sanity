import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss';
import * as styles from './index.module.scss'
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";

const IndexPage = ({ data }) => {
  const Inductees = data.allSanityInductee.nodes;
  const Emerging = data.allSanityEmergingEntrepreneur.nodes;

  return (
    <Layout>
      <InducteeNav title="Inductees" data={Inductees} />
      <InducteeNav title="Emerging Entrepreneurs" data={Emerging} />
      <Sponsors />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allSanityInductee {
      nodes {
        inductee {
          name
          company
          profilePhoto {
            asset {
              gatsbyImageData
            }
          }
          year(formatString: "YYYY")
          title
        }
        inductionCeremonyVideo
        profileVideo
        slug {
          current
        }
      }
    }
    allSanityEmergingEntrepreneur {
      nodes {
        inductee {
          name
          company
          title
          year(formatString: "YYYY")
          profilePhoto {
            asset {
              gatsbyImageData
            }
          }
        }
        linkedin
      }
    }
  }
`;


export default IndexPage;

export const Head = () => <title>Home Page</title>

import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss';
import * as styles from './book.module.scss'
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
import Button from "../components/Button/Button";

const BookPage = ({ data }) => {

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Title className='mx-4 py-5'>Unbridled Series
              <div className={styles.aincImage}>
              <a href="http://fellowship.awesomeinc.org/">
                <StaticImage
                  width={53.6}
                  height={60}
                  alt="Awesome Inc Logo"
                  src='../images/Logo_Square.png'
                />
              </a>
              </div>
              <div className={styles.founderImage}>
              <a href="/founders-series">
                <StaticImage
                  width={60}
                  height={60}
                  
                  alt="Founders Logo"
                  src='../images/founders_logo.png'
                />
              </a>
              </div>
            </Title>
          </Col>
        </Row>
        <Row>
            <Col className='mx-4 py-5'>
                <Body></Body>
            </Col>
        </Row>
    </Container>
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
    allSanityEvent {
      nodes {
        location {
          address
          city
          venue
          zip
          contact {
            phoneNumber
          }
        }
        registrationLink
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;


export default BookPage;

export const Head = () => <title>Book Page</title>

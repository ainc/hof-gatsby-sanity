import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, btn, Navbar, Nav } from 'react-bootstrap';
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
              <a href="http://fellowship.awesomeinc.org/">
                <StaticImage className={styles.aincImage}
                  width={53.6}
                  height={60}
                  alt="Awesome Inc Logo"
                  src='../images/Logo_Square.png'
                />
              </a>
              <a href="/founders-series">
                <StaticImage className={styles.founderImage}
                  width={60}
                  height={60}
                  
                  alt="Founders Logo"
                  src='../images/founders_logo.png'
                />
              </a>
            </Title>
          </Col>
        </Row>
        <Row className={styles.UBSRow}>
            <Col className={`${styles.UBSColumn} mx-4`}>
                <StaticImage className={styles.UBSv1Cover}
                  alt="Unbridled Series Vol. 1 Cover"
                  src='../images/UBS-V1-Cover.jpg'
                />
                <a href='https://www.amazon.com/dp/1619616815/' target='_blank'>
                  <button className={styles.UBSv1Button}>
                    <b>
                      Purchase Here: Unbridled Spirit Volume 1
                    </b>
                  </button>
                </a>
            </Col>
            <Col className={`${styles.UBSColumn} mx-4 `}>
              <StaticImage className={styles.UBSv2Cover}
                  alt="Unbridled Series Vol. 2 Cover"
                  src='../images/UBS-V2-Cover.jpg'
                />
                 <a href='https://www.amazon.com/Unbridled-Spirit-Kentuckys-Successful-Entrepreneurs/dp/1544536704' target='_blank'>
                  <button className={styles.UBSv2Button}>
                    <b>
                      Purchase Here: Unbridled Spirit Volume 2
                    </b>
                  </button>
                </a>
            </Col>
        </Row>
        <Row>
          <Col className={`${styles.UBSColumnText} mx-4`}>
            <div class="row-fluid center-block" className={styles.UBSv1Text}>
              <Body>Famous for college basketball, horse racing, bourbon, coal, and bluegrass music, the Commonwealth of</Body>
              <Body>Kentucky is also home to industries and opportunities not normally associated with it. Compiled by the</Body>      
              <Body>Kentucky Entrepreneur Hall of Fame, Unbridled Spirit shares the success stories of twenty of its members—</Body>
              <Body>business leaders who dared to think beyond t  he region’s best known institutions—to encourage the next</Body>
              <Body>generation of entrepreneurs from the Bluegrass State.</Body>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <StaticImage className={styles.UBSv2CoverBig}
                  alt="Unbridled Series Vol. 2 Cover"
                  src='../images/UBS-V2-Cover.jpg'
                />
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

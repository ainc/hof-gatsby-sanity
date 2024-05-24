import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss';
import * as styles from './index.module.scss'
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
const IndexPage = ({ data }) => {
  const Inductees = data.allSanityInductee.nodes;
  const Emerging = data.allSanityEmergingEntrepreneur.nodes;
  const [inducteeSelectedYear, setInducteeSelectedYear] = useState(null);
  const [emergingSelectedYear, setEmergingSelectedYear] = useState(null);

  return (
    <Layout>
      <div className={styles.background}>
        <Container className={`${styles.billboard} py-5`}>
        <h2>
          <div className={styles.title1}>KENTUCKY ENTREPRENEUR</div>
          <div className={styles.title2}>HALL OF FAME</div>
          <div className={styles.tagline}>Honoring Kentucky's Most Successful Entrepreneurs</div>
        </h2>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <Title className='mx-4 py-5'>About Us</Title>
          </Col>
        </Row>
        <Row>
          <Col className='mx-4 py-5'>
            <Body>The Kentucky Entrepreneur Hall of Fame is a physical and virtual destination that shares and celebrates the stories of Kentucky's most successful entrepreneurs.</Body>
            <Body>Our mission is to raise awareness of the impact that entrepreneurship has made in the Commonwealth and encourage others to pursue similar ambitious endeavors.</Body>
            <Body>Nominations are open for the current year's class. To nominate, fill out this form. Anyone can nominate.</Body>
            <Body>If you have questions or would like to become involved please email us at <a className='link' href='mailto:ky@entrepreneurhof.com' target="_blank">ky@entrepreneurhof.com</a>.</Body>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <InducteeNav title="Inductees" data={Inductees} selectedYear={inducteeSelectedYear} setSelectedYear={setInducteeSelectedYear}/>
      <InducteeNav title="Emerging Entrepreneurs" data={Emerging} selectedYear={emergingSelectedYear} setSelectedYear={setEmergingSelectedYear}/>
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

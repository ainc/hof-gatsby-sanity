import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss';
import * as styles from './index.module.scss'
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
import Button from "../components/Button/Button";
import FlickerImages from "../components/FlickerImages/FlickerImages";

const IndexPage = ({ data }) => {
  const Inductees = data.allSanityInductee.nodes;
  const Emerging = data.allSanityEmergingEntrepreneur.nodes;
  const event = data.allSanityEvent.nodes.at(-1)
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
          <Col className='mx-4 py-5'>
            <Row>
              <Col>
                <FlickerImages img='https://farm4.static.flickr.com/3828/11002815294_556f3a0413_q.jpg' />
              </Col>
              <Col>
                <FlickerImages img='https://farm6.static.flickr.com/5519/11002635503_4c62714db6_q.jpg' />
              </Col>
              <Col>
                <FlickerImages img='https://farm4.static.flickr.com/3773/11003240183_57109022a6_q.jpg' />
              </Col>
              <Col>
                <FlickerImages img='https://farm3.static.flickr.com/2891/10981649563_470d50bd93_q.jpg' />
              </Col>
              <Col>
                <FlickerImages img='https://farm3.static.flickr.com/2835/11003216434_7c9b92b6fa_q.jpg' />
              </Col>
              <Col>
                <FlickerImages img='https://farm7.static.flickr.com/6093/6377120649_5eb9469158_q.jpg' />
              </Col>
            </Row>
            <Row className='text-right' style={{textAlign: 'right'}}>
              <Body className='text-right'><a className='link' href='http://www.timwebbphotography.com/p377969083'>See All Photos <i className='icon-caret-right' /></a></Body>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title className='mx-4 py-5'>Induction Dinner</Title>
          </Col>
        </Row>
        <Row className={`${styles.flexColSm} d-flex`}>
          <Col className='mx-lg-4 py-5'>
            <Body>The Induction Dinner exists to celebrate the new Kentucky Entrepreneur Hall of Fame inductees and their stories. Join us as we induct this year’s class of entrepreneurs.</Body>
            <Body><span className='fw-bold'>Date:</span> {event.date}</Body>
            <Body><span className='fw-bold'>Schedule:</span> 4:30 p.m. Reception | 6 p.m. Dinner</Body>
            <Body><span className='fw-bold'>Location:</span> {event.location.venue}, {event.location.city}</Body>
            <a href='/induction-dinner'>
              <Button className=''>More Info</Button>
            </a>
          </Col>
          <Col className='mx-lg-4 py-5'>
            <StaticImage  placeholder='blurred' src='../images/2023-dinner.jpg' />
          </Col>
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


export default IndexPage;

export const Head = () => <title>Home Page</title>

import React, { useState } from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/main.scss";
import * as styles from "./index.module.scss";
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
import FlickerImages from "../components/FlickerImages/FlickerImages";
import IconPair from "../components/IconPair/IconPair";
import RotatingImages from "../components/RotatingImages";

const IndexPage = ({ data }) => {
  const Inductees = data.allSanityInductee.nodes;
  const Emerging = data.allSanityEmergingEntrepreneur.nodes;
  const event = data.allSanityEvent.nodes.at(-1);
  const [inducteeSelectedYear, setInducteeSelectedYear] = useState(null);
  const [emergingSelectedYear, setEmergingSelectedYear] = useState(null);
  const [inducteeSelectedIndustry, setInducteeSelectedIndustry] = useState(null);
  const [emergingSelectedIndustry, setEmergingSelectedIndustry] = useState(null);
  return (
    
 <Layout>
  <RotatingImages>
    <div className={styles.heroContent}>
      <div className={styles.titleBlock}>
        <div className={styles.title1}>KENTUCKY ENTREPRENEUR HALL OF FAME</div>
        
        <div className={styles.tagline}>
  <em>Honoring Kentucky's Most Successful Entrepreneurs</em>
</div>
      </div>

      <div className={styles.nominateWrapper}>
        <a href="https://www.eventbrite.com/e/the-kentucky-entrepreneur-hall-of-fame-ceremony-dinner-2026-awesome-inc-tickets-1990889427872" target="_blank" rel="noreferrer" className={styles.nominateBtn}>
          Attend Induction Ceremony
        </a>
      </div>
    </div>
  </RotatingImages>

 
  <Container>
    <Row>
      <Col>
        <div
          className="d-flex justify-content-between mx-4 py-5 align-items-center"
          style={{ borderBottom: "1px solid #bbb" }}
        >
              <Title style={{ borderBottom: "none" }}>About Us</Title>
              <IconPair />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mx-4 py-5">
            <Body>
              The Kentucky Entrepreneur Hall of Fame is a physical and virtual
              destination that shares and celebrates the stories of Kentucky's
              most successful entrepreneurs.
            </Body>
            <Body>
              Our mission is to raise awareness of the impact that
              entrepreneurship has made in the Commonwealth and encourage others
              to pursue similar ambitious endeavors.
            </Body>
            <Body>
              Nominations are open for the current year's class. To nominate,
              <a href="/nominate"> fill out this form.</a> Anyone can nominate.
            </Body>
            <Body>
              If you have questions or would like to become involved please
              email us at{" "}
              <a
                className="link"
                href="mailto:ky@entrepreneurhof.com"
                target="_blank"
                rel="noreferrer"
              >
                ky@entrepreneurhof.com
              </a>
              .
            </Body>
          </Col>
          <Col className="mx-4 py-5">
            <Row>
              <Col>
                <FlickerImages img="https://farm4.static.flickr.com/3828/11002815294_556f3a0413_q.jpg" />
              </Col>
              <Col>
                <FlickerImages img="https://farm6.static.flickr.com/5519/11002635503_4c62714db6_q.jpg" />
              </Col>
              <Col>
                <FlickerImages img="https://farm4.static.flickr.com/3773/11003240183_57109022a6_q.jpg" />
              </Col>
              <Col>
                <FlickerImages img="https://farm3.static.flickr.com/2891/10981649563_470d50bd93_q.jpg" />
              </Col>
              <Col>
                <FlickerImages img="https://farm3.static.flickr.com/2835/11003216434_7c9b92b6fa_q.jpg" />
              </Col>
              <Col>
                <FlickerImages img="https://farm7.static.flickr.com/6093/6377120649_5eb9469158_q.jpg" />
              </Col>
            </Row>
            <Row className="text-right" style={{ textAlign: "right" }}>
              <Body className="text-right">
                <a
                  className="link"
                  href="http://www.timwebbphotography.com/p377969083"
                >
                  See All Photos <i className="icon-caret-right" />
                </a>
              </Body>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className={styles.ceremonyBanner}>
        <h2 className={styles.ceremonyTitle}>Dinner &amp; Ceremony</h2>
        <p className={styles.ceremonyIntro}>
          The Induction Ceremony exists to celebrate the new Kentucky
          Entrepreneur Hall of Fame inductees and their stories. Join us as we
          induct this year’s class of entrepreneurs.
        </p>
        <p className={styles.ceremonyDetail}>
          <span className={styles.ceremonyLabel}>Date:</span>{" "}
          <span className={styles.ceremonyValue}>{event.date}</span>
        </p>
        {event.schedule && (
          <p className={styles.ceremonyDetail}>
            <span className={styles.ceremonyLabel}>Schedule:</span>{" "}
            <span className={styles.ceremonyValue}>
              {event.schedule
                .split(",")
                .map((item) => item.trim())
                .join(" | ")}
            </span>
          </p>
        )}
        <p className={styles.ceremonyDetail}>
          <span className={styles.ceremonyLabel}>Location:</span>{" "}
          <span className={styles.ceremonyValue}>
            {event.location.venue}, {event.location.city} KY
          </span>
        </p>
        <div className={styles.ceremonyActions}>
          <a
            href="https://www.eventbrite.com/e/the-kentucky-entrepreneur-hall-of-fame-ceremony-dinner-2026-awesome-inc-tickets-1990889427872"
            target="_blank"
            rel="noreferrer"
            className={styles.ceremonyBtn}
          >
            Attend Induction Ceremony
          </a>
          <a href="/induction-dinner" className={styles.ceremonyBtnOutline}>
            More Info
          </a>
        </div>
      </div>
      <div id="InducteeSection">
        <InducteeNav
          title="Inductees"
          data={Inductees}
          selectedYear={inducteeSelectedYear}
          setSelectedYear={setInducteeSelectedYear}
          selectedIndustry={inducteeSelectedIndustry}
          setSelectedIndustry={setInducteeSelectedIndustry}
        />
      </div>
      <InducteeNav
        title="Emerging Entrepreneurs"
        data={Emerging}
        selectedYear={emergingSelectedYear}
        setSelectedYear={setEmergingSelectedYear}
        selectedIndustry={emergingSelectedIndustry}
        setSelectedIndustry={setEmergingSelectedIndustry}
      />
      <Container>
        <Row>
          <Col>
            <Body className="mx-4">
              <span className="fw-bold">Note:</span> The companies or
              organizations listed for each Emerging Entrepreneur are those with
              which the honoree was most closely associated at the time of
              recognition.
            </Body>
            <Title className="mx-4 py-5" style={{ borderBottom: "none" }}>
              <a className="link" href="/investors-mentors">
                Investors and Mentors of the Year
              </a>
            </Title>
          </Col>
        </Row>
      </Container>
      <Sponsors />
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allSanityInductee(
      sort: [{ inductee: { year: DESC } }, { inductee: { name: ASC } }]
    ) {
      nodes {
        inductee {
          name
          company
          profilePhoto {
            asset {
              gatsbyImageData(
                width: 300
                height: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          year(formatString: "YYYY")
          industry
          title
        }
        inductionCeremonyVideo
        profileVideo
        slug {
          current
        }
      }
    }
    allSanityEmergingEntrepreneur(sort: { inductee: { year: DESC } }) {
      nodes {
        inductee {
          name
          company
          title
          year(formatString: "YYYY")
          industry
          profilePhoto {
            asset {
              gatsbyImageData(
                width: 300
                height: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
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
        schedule
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Kentucky Entrepreneur Hall of Fame</title>;
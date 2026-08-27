import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./sponsors.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const Sponsors = () => {
  const query = useStaticQuery(graphql`
    query SponsorsQuery {
      allSanitySponsors(sort: { name: ASC }) {
        nodes {
          sponsorType
          name
          image {
            asset {
              gatsbyImageData
            }
          }
          link
        }
      }
    }
  `);

  const presentingSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType === "Presenting",
  );
  const platinumSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType == "Platinum",
  );
  const goldSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType === "Gold",
  );
  const silverSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType === "Silver",
  );
  const bronzeSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType === "Bronze",
  );
  const pioneerSponsor = query.allSanitySponsors.nodes.filter(
    (node) => node.sponsorType === "Pioneer",
  );
  return (
    <Container id="sponsors" className={styles.border}>
      {presentingSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center my-4">
        <h3>Presenting Sponsor</h3>
        {presentingSponsor.map((node, index) => (
          <Col md={12} className="my-5">
            <a
              href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "140px" }}
                style={{ maxWidth: "50%", maxHeight: "140px", width: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>
          </Col>
        ))}
      </Row>
      )}
      {platinumSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center my-4">
        <h3>Platinum Sponsor</h3>
        {platinumSponsor.map((node, index) => (
          <Col md={12} className="my-5">
            <a href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "110px" }}
                style={{ maxWidth: "40%", maxHeight: "110px", width: "100%", height: "auto", margin: "0 auto" }}
                />
            </a>
          </Col>
        ))}
      </Row>
      )}
      {goldSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center my-4">
        <h3>Gold Sponsor</h3>
        {goldSponsor.map((node, index) => (
          <Col className="my-5">
            <a
              href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "90px" }}
                style={{ maxWidth: "32%", maxHeight: "90px", width: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>
          </Col>
        ))}
      </Row>
      )}
      {silverSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center">
        <h3>Silver Sponsor</h3>
        {silverSponsor.map((node, index) => (
          <Col className="my-5">
            <a
              href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "70px" }}
                style={{ maxWidth: "24%", maxHeight: "70px", width: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>
          </Col>
        ))}
      </Row>
      )}
      {bronzeSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center">
        <h3>Bronze Sponsor</h3>
        {bronzeSponsor.map((node, index) => (
          <Col className="my-5">
            <a
              href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "60px" }}
                style={{ maxWidth: "20%", maxHeight: "60px", width: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>
          </Col>
        ))}
      </Row>
      )}
      {pioneerSponsor.length > 0 && (
      <Row className="d-flex justify-content-center align-items-center text-center">
        <h3>Pioneer Sponsor</h3>
        {pioneerSponsor.map((node, index) => (
          <Col className="my-5">
            <a
              href={node.link}
              target="_blank"
              className="mt-3"
              rel="noreferrer"
            >
              <GatsbyImage
                image={node.image.asset.gatsbyImageData}
                alt={node.name}
                imgStyle={{ objectFit: "contain", maxHeight: "60px" }}
                style={{ maxWidth: "20%", maxHeight: "60px", width: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>
          </Col>
        ))}
      </Row>
      )}
    </Container>
  );
};

export default Sponsors;

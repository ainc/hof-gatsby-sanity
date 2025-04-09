import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Row, Col, Container, Card } from "react-bootstrap";
import "../../styles/main.scss";
import * as styles from "./inductee-bio.module.scss";
import Sponsors from "../../components/Sponsors/Sponsors";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import { PortableText } from "@portabletext/react";
import Body from "../../components/Body/Body";
const InducteeBio = ({ pageContext }) => {
  const inducteeInfo = pageContext.post;

  const inducteeImage = inducteeInfo.inductee.profilePhoto
    ? getImage(inducteeInfo.inductee.profilePhoto.asset.gatsbyImageData)
    : null;
  const profileVideoImage = inducteeInfo.profileVideoImage
    ? getImage(inducteeInfo.profileVideoImage.asset.gatsbyImageData)
    : null;
  const inductionImage = inducteeInfo.InductionVideoImage
    ? getImage(inducteeInfo.InductionVideoImage.asset.gatsbyImageData)
    : null;
  console.log(inducteeInfo.bio[0].children[0].text);
  return (
    <Layout>
      <Container>
        <Row>
          <Title className="pt-3 pb-5">Inductee</Title>
        </Row>
        <Row className="pb-5">
          <Col md={12} lg={3}>
            <Card className={styles.inducteeCard}>
              <div className={styles.imageContainer}>
                {inducteeImage ? (
                  <GatsbyImage image={inducteeImage} />
                ) : (
                  // Ternary expression
                  <StaticImage src="../../images/Logo_Square.png" />
                )}
              </div>
            </Card>
          </Col>
          <Col>
            <h2 className="pt-3">{inducteeInfo.inductee.name}</h2>
            <h3 className={styles.company}>
              {inducteeInfo.inductee.title} {inducteeInfo.inductee.company}
            </h3>
            <Body>
            {inducteeInfo.bio.map((block, blockIndex) => (
              <div key={blockIndex}>
                {block.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </div>
            ))}
          </Body>
            <a href="/" style={{ color: "rgb(102, 102, 102)" }}>
              <i class="icon-caret-left"></i> Back to Inductees
            </a>
            <Row className={styles.videosTitle}>
              <h3>Videos</h3>
            </Row>
            <Row className="pt-3">
              {/* 
                            Add ternary expression for sanity stuff,
                            If no content, display a placeholder 
                            to make sure pages build despite missing content
                         */}
              <Col lg={6} sm={12}>
                <h3>Profile Video</h3>
                <Container className={styles.videoContainer}>
                  {inducteeInfo.profileVideo && profileVideoImage ? (
                    <a href={inducteeInfo.profileVideo}>
                      <GatsbyImage
                        className="ratio ratio-16x9"
                        image={profileVideoImage}
                      />
                      <div className="position-absolute top-50 start-50 translate-middle text-center mt-2">
                        <StaticImage
                          src="../../images/founders_logo_white_smallest.png"
                          className={styles.playIcon}
                        />
                        <p className={styles.videoText}>WATCH THE VIDEO</p>
                      </div>
                    </a>
                  ) : (
                    <div>
                      <StaticImage
                        src="../../images/Logo_Square.png"
                        alt="Placeholder"
                        objectFit="contain"
                        placeholder="blurred"
                      />
                    </div>
                  )}
                </Container>
              </Col>
              <Col lg={6} sm={12}>
                <h3>Induction Ceremony</h3>
                <Container className={styles.videoContainer}>
                  {inducteeInfo.inductionCeremonyVideo && inductionImage ? (
                    <a href={inducteeInfo.inductionCeremonyVideo}>
                      <GatsbyImage
                        className="ratio ratio-16x9"
                        image={inductionImage}
                      />
                      <div className="position-absolute top-50 start-50 translate-middle text-center mt-2">
                        <StaticImage
                          src="../../images/founders_logo_white_smallest.png"
                          className={styles.playIcon}
                        />
                        <p className={styles.videoText}>WATCH THE VIDEO</p>
                      </div>
                    </a>
                  ) : (
                    <div>
                      <StaticImage
                        src="../../images/Logo_Square.png"
                        alt="Placeholder"
                        placeholder="blurred"
                        objectFit="contain"
                      />
                    </div>
                  )}
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
        <Sponsors />
      </Container>
    </Layout>
  );
};

export default InducteeBio;

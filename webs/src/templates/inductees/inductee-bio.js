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

  // Optimize image processing
  const inducteeImage = inducteeInfo.inductee.profilePhoto
    ? getImage(inducteeInfo.inductee.profilePhoto.asset.gatsbyImageData)
    : null;
  const profileVideoImage = inducteeInfo.profileVideoImage
    ? getImage(inducteeInfo.profileVideoImage.asset.gatsbyImageData)
    : null;
  const inductionImage = inducteeInfo.InductionVideoImage
    ? getImage(inducteeInfo.InductionVideoImage.asset.gatsbyImageData)
    : null;

  // Pre-calculate video existence for better performance
  const hasProfileVideo = Boolean(inducteeInfo.profileVideo);
  const hasInductionVideo = Boolean(inducteeInfo.inductionCeremonyVideo);
  const hasAnyVideo = hasProfileVideo || hasInductionVideo;

  // Calculate column sizes once
  const getColumnSize = (hasOtherVideo) => hasOtherVideo ? 6 : 12;

  // Video component for reusability
  const VideoSection = ({ 
    title, 
    videoUrl, 
    videoImage, 
    hasOtherVideo 
  }) => (
    <Col lg={getColumnSize(hasOtherVideo)} sm={12}>
      <h3>{title}</h3>
      <Container className={styles.videoContainer}>
        {videoImage ? (
          <a href={videoUrl} aria-label={`Watch ${title}`}>
            <GatsbyImage
              className="ratio ratio-16x9"
              image={videoImage}
              alt={`${title} thumbnail`}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center mt-2">
              <StaticImage
                src="../../images/founders_logo_white_smallest.png"
                className={styles.playIcon}
                alt="Play button"
              />
              <p className={styles.videoText}>WATCH THE VIDEO</p>
            </div>
          </a>
        ) : (
          <div>
            <StaticImage
              src="../../images/Logo_Square.png"
              alt="Video placeholder"
              placeholder="blurred"
              objectFit="contain"
            />
          </div>
        )}
      </Container>
    </Col>
  );

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
                  <GatsbyImage 
                    image={inducteeImage} 
                    alt={`${inducteeInfo.inductee.name} profile photo`}
                  />
                ) : (
                  <StaticImage 
                    src="../../images/Logo_Square.png" 
                    alt="Profile placeholder"
                  />
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
              <i className="icon-caret-left"></i> Back to Inductees
            </a>
            
            {/* Only render video section if videos exist */}
            {hasAnyVideo && (
              <>
                <Row className={styles.videosTitle}>
                  <h3>Videos</h3>
                </Row>
                <Row className="pt-3">
                  {hasProfileVideo && (
                    <VideoSection
                      title="Profile Video"
                      videoUrl={inducteeInfo.profileVideo}
                      videoImage={profileVideoImage}
                      hasOtherVideo={hasInductionVideo}
                    />
                  )}
                  
                  {hasInductionVideo && (
                    <VideoSection
                      title="Induction Ceremony"
                      videoUrl={inducteeInfo.inductionCeremonyVideo}
                      videoImage={inductionImage}
                      hasOtherVideo={hasProfileVideo}
                    />
                  )}
                </Row>
              </>
            )}
          </Col>
        </Row>
        <Sponsors />
      </Container>
    </Layout>
  );
};

export default InducteeBio;

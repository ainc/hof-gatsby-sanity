import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/Title/Title";
import * as styles from "./media.module.scss";
import IconPair from "../../components/IconPair/IconPair";

const MediaPage = ({ data }) => {
  const allPress = data.allSanityPress.nodes || {};
  const allCeremony = data.allSanityCeremonyVideo.nodes || {};

  const PressComp = ({ allPress }) => {
    let currentYear = null;
    return (
      <div>
        {allPress.map((node) => {
          const articleYear = new Date(node.date).getFullYear();
          const yearHeading =
            articleYear !== currentYear ? (
              <h3 className={styles.yearHeader}>Class of {articleYear}</h3>
            ) : null;
          currentYear = articleYear;

          return (
            <Title>
              {yearHeading}
              <a href={node.link} target="_blank">
                <h4>{node.title}</h4>
              </a>
              <p>
                {node.date} - {node.publisher}
              </p>
            </Title>
          );
        })}
      </div>
    );
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            <div
              className="py-5 my-3 d-flex"
              style={{ borderBottom: "1px solid #bbb" }}
            >
              <Title style={{ borderBottom: "none" }}>Podcast</Title>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PL_YvoQ-KM3YHtlmn9_E841lpegYDVlXOk"
                className="pt-3"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Podcast Video"
              ></iframe>
            </div>
            <Title className="py-5">Book</Title>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/uUbLe0U6Fdk"
                className="pt-3"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Book Video"
              ></iframe>
            </div>
            <section className="mt-3">
              <h3>Stories inside include:</h3>
              <ul>
                <li>
                  What Jim Host (Host Communications) did after going from
                  having $1,800,000 to being in debt $560,000 (inflation
                  adjusted) in 1967 when he was 28 years old. - page 50
                </li>
                <li>
                  The investment Bill Gatton (Bill Gatton Motors) made when he
                  was 8 years old - page 192
                </li>
                <li>
                  What nine Harvard business professors told John Y. Brown Jr
                  when he asked for advice about running KFC (hint: the
                  conversation was short) - page 36
                </li>
              </ul>
              <h3>
                Check out samples from the Audio version of Unbridled Spirit:
              </h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/p/BuXfzSyhFsr/?utm_source=ig_web_button_share_sheet">
                    Junior Bridgeman
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/p/BtzIZFAh6Ow/?utm_source=ig_web_button_share_sheet">
                    Lee Todd
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/p/BuEqiFYBh-o/?utm_source=ig_web_button_share_sheet">
                    Jim Host
                  </a>
                </li>
              </ul>
              <p>
                Pick up a copy of the audio book here:
                <ul>
                  <li>
                    <a href="http://amzn.to/2yrO97K">
                      Unbridled Spirit on Amazon
                    </a>
                  </li>
                  <li>
                    <a href="https://adbl.co/2zJeaxo">
                      Unbridled Spirit on Audible (Sign in with your Amazon
                      account too!)
                    </a>
                  </li>
                  <li>
                    <a href="https://itunes.apple.com/us/audiobook/unbridled-spirit-lessons-in-life-business-from-kentuckys/id1441679300">
                      Unbridled Spirit on iTunes
                    </a>
                  </li>
                </ul>
              </p>
              <p>
                For inquiries about using the book for a class on business,
                entrepreneurship and/or Kentucky history, please email{" "}
                <a href="mailto:garrett.fahrbach@entrepreneurhof.com">
                  garrett.fahrbach@entrepreneurhof.com
                </a>
              </p>
            </section>
            <Title className="py-5">Recent Press</Title>

            <PressComp allPress={allPress} />
          </Col>
          <Col lg={4} md={5} sm={12}>
            <div
              className="d-flex justify-content-between py-5 my-1 align-items-center"
              style={{ borderBottom: "1px solid #bbb" }}
            >
              <Title style={{ borderBottom: "none" }}>Recent</Title>
              <IconPair />
            </div>
            <ul className={styles.ceremonyVideos}>
              {allCeremony.map((node) => (
                <li key={node.name} className="py-2">
                  <p>{node.name}</p>
                  <a
                    className={styles.videoLink}
                    href={node.videoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="ratio ratio-16x9">
                      <div className={`${styles.thumbnail} w-100 h-100`}>
                        <div className="h-100 w-100">
                          <GatsbyImage
                            image={node.image.asset.gatsbyImageData}
                            className={styles.ceremonyImage}
                            alt={node.name}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.play} position-absolute start-50 translate-middle`}
                    >
                      <StaticImage
                        placeholder="blurred"
                        src="../../images/founders_logo_white_smallest.png"
                        className="opacity-50"
                      />
                      <p className={styles.videoText}>{node.name}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Sponsors />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query MediaPageQuery {
    allSanityPress(sort: { date: DESC }) {
      nodes {
        title
        publisher
        date(formatString: "MMM D, YYYY")
        link
      }
    }
    allSanityCeremonyVideo(sort: { name: DESC }) {
      nodes {
        name
        videoLink
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Media</title>;

export default MediaPage;

import * as React from 'react';

import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/seo';
import { graphql } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from '../../components/Title/Title';
import * as styles from './media.module.scss'

const MediaPage = ({data}) => {
    const allPress = data.allSanityPress.nodes || {};
    const allCeremony = data.allSanityCeremonyVideo.nodes || {};
    const allSponsors = data.allSanitySponsors.nodes || {};
    return (
        <Layout>
          <Row >
            <Col md={8} sm={12}>
                <Title className={styles.podcastHeader}>
                    <h2>Podcast</h2>
                    <div className={styles.whiteSpace}></div>
                </Title>
                <iframe className={styles.podcastVideo} src="https://www.youtube.com/embed/videoseries?list=PL_YvoQ-KM3YHtlmn9_E841lpegYDVlXOk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Title className={styles.podcastHeader}>
                    <h2>Book</h2>
                    <div className={styles.whiteSpace}></div>
                </Title>
                <iframe className={styles.podcastVideo} src="https://www.youtube.com/embed/uUbLe0U6Fdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <section className={styles.mediaInfo}>
                    <h3>Stories inside include:</h3>
                    <ul>
                        <li>What Jim Host (Host Communications) did after going from having $1,800,000 to being in debt $560,000
                       (inflation adjusted) in 1967 when he was 28 years old. - page 50</li>
                        <li>The investment Bill Gatton (Bill Gatton Motors) made when he was 8 years old - page 192</li>
                        <li>What nine Harvard business professors told John Y. Brown Jr when he asked for advice about running KFC (hint: the conversation was short) - page 36</li>
                    </ul>
                    <h3>Check out samples from the Audio version of Unbridled Spirit:</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/p/BuXfzSyhFsr/?utm_source=ig_web_button_share_sheet">Junior Bridgeman</a></li>
                        <li><a href="https://www.instagram.com/p/BtzIZFAh6Ow/?utm_source=ig_web_button_share_sheet">Lee Todd</a></li>
                        <li><a href="https://www.instagram.com/p/BuEqiFYBh-o/?utm_source=ig_web_button_share_sheet">Jim Host</a></li>
                    </ul>
                    <p>Pick up a copy of the audio book here:
                        <ul>
                            <li><a href="http://amzn.to/2yrO97K">Unbridled Spirit on Amazon</a></li>
                            <li><a href="https://adbl.co/2zJeaxo">Unbridled Spirit on Audible (Sign in with your Amazon account too!)</a></li>
                            <li><a href="https://itunes.apple.com/us/audiobook/unbridled-spirit-lessons-in-life-business-from-kentuckys/id1441679300">Unbridled Spirit on iTunes</a></li>
                        </ul>
                    </p>
                    <p>For inquiries about using the book for a class on business, entrepreneurship and/or Kentucky history, please email <a href="mailto:garrett.fahrbach@entrepreneurhof.com">garrett.fahrbach@entrepreneurhof.com</a></p>
                </section>
                <Title className={styles.podcastHeader}>
                    Recent Press
                    <div className={styles.whiteSpace}></div>
                </Title>
            </Col>
            <Col md={4} sm={12}>
                <Title className={styles.recentHeader}>
                <h2>Recent</h2>
                <div className={styles.logos}>
                  <StaticImage 
                    className={styles.awesomeLogo}
                    src='../../images/Logo_Square.png'
                    alt='Awesome Inc Logo'
                  />
                  <StaticImage 
                    className={styles.founderLogo}
                    src='../../images/founders_logo.png'
                    alt='Founder Series'
                  />
                  </div>
                </Title>
                <ul>
                    {allCeremony.map(node => (
                        <li key={node.name}>
                            <a href={node.videoLink} target="_blank" rel="noreferrer">
                                <GatsbyImage 
                                    image={node.videoThumbnail.asset.gatsbyImageData} 
                                    alt={node.name} 
                                    style={{maxWidth: '100%'}}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </Col>
          </Row>

        </Layout>
    );
}


export const query = graphql`
    query MediaPageQuery {
        allSanityPress {
            nodes {
                title
                publisher
                date(formatString: "MMM D, YYYY")
                link
            }
        }
        allSanityceremonyVideo {
            nodes{
                name
                videoLink
                thumbnail {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
        allSanitySponsors {
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
`;



export default MediaPage;

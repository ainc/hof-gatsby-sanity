import React, {useState, useEffect} from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Row, Col, Container, Card} from 'react-bootstrap'
import '../../styles/main.scss'
import * as styles from './inductee-bio.module.scss'
import Sponsors from '../../components/Sponsors/sponsors'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import {PortableText} from '@portabletext/react'
import Body from '../../components/Body/Body'
const InducteeBio = ({ pageContext }) => {

    const inducteeInfo = pageContext.post;

    const inducteeImage = getImage(inducteeInfo.inductee.profilePhoto.asset.gatsbyImageData);
    const profileVideoImage = getImage(inducteeInfo.profileVideoImage.asset.gatsbyImageData);
    const inductionImage = getImage(inducteeInfo.InductionVideoImage.asset.gatsbyImageData); 
    console.log(inducteeInfo.bio[0].children[0].text)
    return (
    <Layout>
        <Container>
            <Row>
                <Title className='pt-3 pb-5'>Inductee</Title>
            </Row>
            <Row>
                <Col md={3}>
                    <Card className={styles.inducteeCard}>
                        <div className={styles.imageContainer}>
                            <GatsbyImage image={inducteeImage} />
                        </div>
                    </Card>
                </Col>
                <Col>
                    <h2 className='pt-3'>{inducteeInfo.inductee.name}</h2>
                    <h3 className={styles.company}>{inducteeInfo.inductee.title} {inducteeInfo.inductee.company}</h3>
                    <Body>{inducteeInfo.bio[0].children[0].text}</Body>
                    <a href="/" style={{color: "rgb(102, 102, 102)"}}><i class="icon-caret-left"></i> Back to Inductees</a>
                    <Row className={styles.videosTitle}>
                        <h3 >Videos</h3>
                    </Row>
                    <Row className='pt-3'>
                        <Col lg={6} sm={12}>
                            <h3>Profile Video</h3>
                            <Container className={styles.videoContainer}>
                            <a href={inducteeInfo.profileVideo} >
                                <GatsbyImage className='ratio ratio-16x9' image={profileVideoImage}/>
                            </a>
                            </Container>
                        </Col>
                        <Col lg={6} sm={12}>
                            <h3>Induction Ceremony</h3>
                            <Container className={styles.videoContainer}>
                                <a href={inducteeInfo.profileVideo} rel='shadowbox'>
                                    <GatsbyImage className='ratio ratio-16x9' image={inductionImage} style={{background: "#FFF", backgroundSizing: 'color'}}/>
                                </a>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {inducteeInfo.profileVideo && inducteeInfo.inductionCeremonyVideo && (
            <>
            
            </>
            )}
            <Sponsors />
        </Container>
    </Layout>
    )
};

export default InducteeBio;
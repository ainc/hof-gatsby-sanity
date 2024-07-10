import React, {useState, useEffect} from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Row, Col, Container, Card} from 'react-bootstrap'
import '../../styles/main.scss'
import * as styles from './inductee-bio.module.scss'
import Sponsors from '../../components/Sponsors/sponsors'
import Layout from '../../components/Layout/Layout'
import {PortableText} from '@portabletext/react'
import Body from '../../components/Body/Body'
const InducteeBio = ({ pageContext }) => {

    const inducteeInfo = pageContext.post;

    const inducteeImage = getImage(inducteeInfo.inductee.profilePhoto.asset.gatsbyImageData)
    console.log(inducteeInfo.bio[0].children[0].text)
    return (
    <Layout>
        <Container>
            <Row>
                <h1>Inductee</h1>
            </Row>
            <Row>
                <Col md={3}>
                    <Card className={styles.inducteeCard}>
                        <div className={styles.imageContainer}>
                            <GatsbyImage image={inducteeImage} alt={inducteeInfo.inductee.name} />
                        </div>
                    </Card>
                </Col>
                <Col>
                    <h2>{inducteeInfo.inductee.name}</h2>
                    <h3>{inducteeInfo.inductee.title}, {inducteeInfo.inductee.company}</h3>
                    <Body>{inducteeInfo.bio[0].children[0].text}</Body>
                </Col>
            </Row>
            {inducteeInfo.profileVideo && inducteeInfo.inductionCeremonyVideo && (
            <>
            <Row>
                <h3>Videos</h3>
            </Row>
            <Row>
                <Col>
                    <h3>Profile Video</h3>
                </Col>
                <Col>
                    <h3>Induction Ceremony</h3>
                </Col>
            </Row>
            </>
            )}
            <Sponsors />
        </Container>
    </Layout>
    )
};

export default InducteeBio;
import React, {useState, useEffect} from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Row, Col, Container, Card} from 'react-bootstrap'
import '../../styles/main.scss'
import * as styles from './inductee-bio.module.scss'


const InducteeBio = ({ pageContext }) => {

    const inducteeInfo = pageContext.post;

    const inducteeImage = getImage(inducteeInfo.profilePhoto.asset.gatsbyImageData)

    return (
        <Container>
            <Row>
                <h1>Inductee</h1>
            </Row>
            <Row>
                <Col md={3}>
                    <Card className={styles.inducteeCard}>
                        <div className={styles.imageContainer}>
                            <GatsbyImage image={inducteeImage} alt={inducteeInfo.name} />
                        </div>
                    </Card>
                </Col>
                <Col>
                    <h2>{inducteeInfo.name}</h2>
                    <h3>{inducteeInfo.title}, {inducteeInfo.company}</h3>
                    <p>{inducteeInfo.bio}</p>
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
        </Container>
    )
};

export default InducteeBio;
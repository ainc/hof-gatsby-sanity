import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './sponsors.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';


const Sponsors = () => {

    const query = useStaticQuery(graphql`
    query SponsorsQuery {
        allSanitySponsors(sort: {name: ASC}) {
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
      }`
    );
    
    const presentingSponsor = query.allSanitySponsors.nodes.filter(node => node.sponsorType === "Presenting");
    const goldSponsor = query.allSanitySponsors.nodes.filter(node => node.sponsorType === "Gold");
    const silverSponsor = query.allSanitySponsors.nodes.filter(node => node.sponsorType === "Silver");
    return(
        <Container id='sponsors' className={styles.border}>
            <Row className='d-flex justify-content-center align-items-center text-center my-4'>
                <h3>Presenting Sponsor</h3>
                {presentingSponsor.map((node, index) => (
                    <Col md={12} className='my-5'>
                        <a href={node.link} target='_blank' className='mt-3' rel="noreferrer">
                            <GatsbyImage image={node.image.asset.gatsbyImageData} alt={node.name} style={{maxWidth: '40%'}}/>
                        </a>
                    </Col>
                ))}
            </Row>
            <Row className='d-flex justify-content-center align-items-center text-center my-4'>
                <h3>Gold Sponsor</h3>
                {goldSponsor.map((node, index) => (
                    <Col className='my-3'>
                        <a href={node.link} target='_blank' className='mt-3' rel="noreferrer">
                            <GatsbyImage image={node.image.asset.gatsbyImageData} alt={node.name} style={{maxWidth: '55%'}}/>
                        </a>
                    </Col>
                ))}
            </Row>
            <Row className='d-flex justify-content-center align-items-center text-center my-4'>
                <h3>Silver Sponsor</h3>
                {silverSponsor.map((node, index) => (
                    <Col className='my-3'>
                        <a href={node.link} target='_blank' className='mt-3' rel="noreferrer">
                            <GatsbyImage image={node.image.asset.gatsbyImageData} alt={node.name} style={{maxWidth: '60%'}}/>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Sponsors;


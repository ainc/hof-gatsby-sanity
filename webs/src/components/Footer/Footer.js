import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby';

import * as styles from './footer.module.scss'
const Footer = () => {
    const query = useStaticQuery(graphql`
    query FooterQuery {
        allSanityFooter {
            nodes {
            sponsorLink
            sponsorContact {
                email
                name
                phoneNumber
            }
            }
        }
        allSanityYearlyUpdates {
            nodes {
            advertisingRate {
                asset {
                url
                originalFilename
                }
            }
            postEventReport {
                asset {
                url
                originalFilename
                }
            }
            registrationLink
            sponsorOpportunites {
                asset {
                originalFilename
                url
                }
            }
            }
        }
    }`);
    const footerInfo = query.allSanityFooter.nodes.at(-1)
    const advertisingDoc = query.allSanityYearlyUpdates.nodes.at(-1).advertisingRate
    const postEventReport = query.allSanityYearlyUpdates.nodes.at(-1).postEventReport
    const sponsorOpportunites = query.allSanityYearlyUpdates.nodes.at(-1).sponsorOpportunites
    console.log(sponsorOpportunites)
    return (
        <Container fluid className={styles.footer}>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <h3>Become a sponsor</h3>
                        </Row>
                        <Row>
                            <p>Click <a href={sponsorOpportunites.asset.url} target='_blank'>Here</a> to Review Sponsorship Opportunities & Benefits</p>
                        </Row>
                        <Row>
                            <p>Click <a href={footerInfo.sponsorLink} target='_blank'>Here</a> to register online as a sponsor</p>
                        </Row>
                        <Row>
                            <p>Contact {footerInfo.sponsorContact.name} at <a href={`mailto:${footerInfo.sponsorContact.email}`}>{footerInfo.sponsorContact.email}</a> or <a href={`tel:${footerInfo.sponsorContact.phoneNumber}`}>{footerInfo.sponsorContact.phoneNumber}</a></p>
                        </Row>
                        <Row>
                            <h3>Sponsorship not an option for you? Consider Advertising</h3>
                        </Row>
                        <Row>
                            <p>Click <a href={advertisingDoc.asset.url} target='_blank'>Here</a> to Review the Advertising Rate Card</p>
                        </Row>
                        <Row>
                            <h3>Nominate an Entrepreneur</h3>
                        </Row>
                        <Row>
                            <p><a href='/nominate'>Nominate for the Hall of Fame, Emerging Entreprenuer, and others.</a></p>
                        </Row>
                        <Row>
                            <h3>Post Event Report</h3>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>Contact</h3>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}
export default Footer;
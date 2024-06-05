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
        allSanityDocuments {
            nodes {
              postEventReport {
                asset {
                  originalFilename
                  url
                }
              }
              advertisingRate {
                asset {
                  originalFilename
                  url
                }
              }
              sponsorOpportunites {
                asset {
                  url
                  originalFilename
                }
              }
            }
          }
          allSanityEvent {
            nodes {
              location {
                address
                city
                venue
                zip
                contact {
                  phoneNumber
                }
              }
            registrationLink
            }
          }
    }`);
    const footerInfo = query.allSanityFooter.nodes.at(-1)
    const advertisingDoc = query.allSanityDocuments.nodes.at(-1).advertisingRate
    const postEventReport = query.allSanityDocuments.nodes.at(-1).postEventReport
    const sponsorOpportunites = query.allSanityDocuments.nodes.at(-1).sponsorOpportunites
    const location = query.allSanityEvent.nodes.at(-1).location

    return (
        <Container fluid className={styles.footer}>
            <Container>
                <Row>
                    <Col className='mx-4' md={7}>
                        <Row>
                            <Col>
                                <h3>Become a Sponsor</h3>
                                <p className='mb-0'>Click <a href={sponsorOpportunites.asset.url} target='_blank'>Here</a> to Review Sponsorship Opportunities & Benefits</p>
                                <p className='mb-0'>Click <a href={footerInfo.sponsorLink} target='_blank'>Here</a> to register online as a sponsor</p>
                                <p>Contact {footerInfo.sponsorContact.name} at <a href={`mailto:${footerInfo.sponsorContact.email}`}>{footerInfo.sponsorContact.email}</a> or <a href={`tel:${footerInfo.sponsorContact.phoneNumber}`}>{footerInfo.sponsorContact.phoneNumber}</a></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Sponsorship not an option for you? Consider Advertising</h3>
                                <p>Click <a href={advertisingDoc.asset.url} target='_blank'>Here</a> to Review the Advertising Rate Card</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Nominate an Entrepreneur</h3>
                                <p><a href='/nominate'>Nominate for the Hall of Fame, Emerging Entreprenuer, and others.</a></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Post Event Report</h3>
                                <p><a href={postEventReport.asset.url} target='_blank'>2023 Post-Event Report</a></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className='mb-0' style={{fontWeight: 'bold'}}>Location</p>
                                <p className='mb-0'>{location.venue}</p>
                                <p className='mb-0'>{location.address}</p>
                                <p className='mb-0'>{location.city}, KY {location.zip}</p>
                                <p>Phone: {location.contact.phoneNumber}</p>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{fontWeight: 'bold'}}><a href={ query.allSanityEvent.nodes.at(-1).registrationLink} target='_blank'>Register Today!</a></p>
                        </Row>
                    </Col>
                    <Col className='mx-4'>
                        <Row>
                            <Col>
                                <h3>Contact</h3>
                                <p className='mb-0'>KY Entrepreneur Hall of Fame</p>
                                <p className='mb-0'>348 E. Main St.</p>
                                <p>Lexington, KY 40507</p>
                                <p><a href='mailto:ky@entrepreneurhof.com' target='_blank'>ky@entrepreneurhof.com</a></p>
                                <p><a href='https://twitter.com/entrepreneurhof' target='_blank'>Follow @entrepreneurhof</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className={`${styles.copyright} mx-4`}>
                        <p className='my-3'>Copyright © 2023 Kentucky Entrepreneur Hall Of Fame</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}
export default Footer;
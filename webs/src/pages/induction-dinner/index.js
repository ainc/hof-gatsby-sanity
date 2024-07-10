import React, {useState} from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import '../../styles/main.scss';
import * as styles from './inductionDinner.module.scss'
import Layout from '../../components/Layout/Layout';
import Sponsors from '../../components/Sponsors/Sponsors';
import Title from '../../components/Title/Title';
import Body from '../../components/Body/Body';
import Button from '../../components/Button/Button'

const InductionDinnerPage = ({ data }) => {

    const event = data.allSanityEvent.nodes.at(-1);
    const documents = data.allSanityDocuments.nodes.at(-1);
    
    // Split the string by commas and trim any extra whitespace
    const renderScheduleWithBreaks = (inputString) => {
        
        return inputString.split(',').map((part, index) => (
          <React.Fragment key={index}>
            {part.trim()}
            {index < inputString.split(',').length - 1 && <br />}
          </React.Fragment>
        ));
      };

    return (
        <Layout>
          <Container>
            <Row>
              <Col>
                <Title className='mx-4 py-5'>{event.date.split(', ')[1]} Induction Celebration Dinner</Title>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <Body>{event.date}
                    <br />{event.location.venue}
                    <br />{event.location.city}, KY
                </Body>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>About the Induction Celebration</h2>
                <h3 className={styles.bodyText}>
                    Join us as we induct this year’s class of entrepreneurs. The Kentucky Entrepreneur Hall of Fame shares and celebrates the stories of
                    Kentucky's most successful entrepreneurs. Our mission is to raise awareness of the impact that entrepreneurship has made in the
                    Commonwealth and encourage others to pursue similar ambitious endeavors.
                </h3>
                <a className={styles.linkText} href='/#InducteeSection'>View this year’s inductees here</a>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Schedule</h2>
                <h3 className={styles.bodyText}>{renderScheduleWithBreaks(event.schedule)}</h3>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Dinner Pricing</h2>
                <h3 className={styles.bodyText}>Ticket <span style={{ marginLeft: '90px' }} >${event.dinnerPrice.regularTicket}</span></h3>
                <h3 className={styles.bodyText}>Student Ticket <span style={{ marginLeft: '18px' }} >${event.dinnerPrice.studentTicket}</span></h3>
                <h3 className={styles.bodyText}>Table of Ten <span style={{ marginLeft: '35px' }} >${event.dinnerPrice.tableOfTenTicket.toLocaleString()}</span></h3>
                <a href={event.registrationLink}>
                  <Button className=''>Register Now</Button>
                </a>
                <h5 class={styles.cancellations}>Cancellations/Substitutions</h5>
                <h6 className={styles.bodyText}>
                    Cancellations must be received no later than five business days prior to the event to receive a refund. After this date, no cash refunds will
                    be granted. Substitutions are welcome. Special accommodations made upon request.
                </h6>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Location/Lodging</h2>
                <h3 className={styles.bold}>{event.location.venue}</h3>
                <h3 className={styles.bodyText}>
                  {event.location.address}
                  <br />{event.location.city}, KY {event.location.zip}
                  <br />Phone: {event.location.contact.phoneNumber}
                </h3>
                <a className={styles.linkText} href={event.location.link}>Directions/Parking</a>
                
                <h3 className={styles.bold}><br />Hotel Accommodations</h3>
                <h3 className={styles.bodyText}>
                  {event.hotelInfo.location.venue}
                  <br />{event.hotelInfo.location.address}
                  <br />{event.hotelInfo.location.city}, KY {event.hotelInfo.location.zip}
                  <br />Phone: {event.hotelInfo.location.contact.phoneNumber}
                  <br />Room Rate: ${event.hotelInfo.roomRate}
                  <br />Room Cutoff date: {event.hotelInfo.roomCutoffDate}
                </h3>
                <a className={styles.linkText} href={event.hotelInfo.location.link}>Book your overnight room here</a>

              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Sponsors</h2>
                <a className={styles.linkText} href='/#SponsorSection'>Meet the event sponsors here</a>
              </Col>
            </Row>
            <Row>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Sponsorship and Advertising Opportunities</h2>
                <h3 className={styles.bodyText}>This event offers unique sponsorship opportunities. Our options cater to market needs and fit a range of budgets.
                     We're here to help you make valuable connections and create measurable results.</h3>
                <a className={styles.linkText} href={documents.sponsorOpportunites.asset.url}>View/Download Sponsorship Pkg.</a><br />
                <a className={styles.linkText} href={documents.advertisingRate.asset.url}>View/Download Advertising Rate Card</a><br />
                <a className={styles.linkText} href={documents.postEventReport.asset.url}>View/Download Last Year's Post-event Report</a>
              </Col>
            </Row>
            <Row className={styles.end}>
              <Col className='mx-4 py-3'>
                <h2 className={styles.induction}>Event Questions?</h2>
                <h3 className={styles.bodyText}>Contact Lori Jo Goff</h3>
                <a className={styles.linkText} href="mailto:lgoff@kychamber.com" target="_blank">lgoff@kychamber.com</a>
                <h3 className={styles.bodyText}>502-848-8727</h3>
              </Col>
            </Row>
          </Container>
            
          <Sponsors />
        </Layout>
    )

};


export const query = graphql`
  query InductionPageQuery {
  allSanityEvent {
    nodes {
      schedule
      location {
        address
        city
        venue
        zip
        link
        contact {
          phoneNumber
        }
      }
      date(formatString: "MMMM DD, YYYY")
      dinnerPrice {
        regularTicket
        studentTicket
        tableOfTenTicket
      }
      registrationLink
      title
      hotelInfo {
        roomCutoffDate(formatString: "MMMM DD, YYYY")
        roomRate
        location {
          contact {
            phoneNumber
          }
          address
          city
          link
          venue
          zip
        }
      }
    }
  }

  allSanityDocuments {
    nodes {
      postEventReport {
        asset {
          url
        }
      }
      sponsorOpportunites {
        asset {
          url
        }
      }
      advertisingRate {
        asset {
          url
        }
      }
    }
  }
}
`;


export default InductionDinnerPage;

export const Head = () => <title>Induction Dinner Page</title>;
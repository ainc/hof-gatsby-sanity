import React from "react"
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/main.scss';
import * as styles from './book.module.scss'
import Sponsors from "../../components/Sponsors/Sponsors";
import Title from "../../components/Title/Title";
import Body from "../../components/Body/Body";
import Layout from "../../components/Layout/Layout";
import IconPair from "../../components/IconPair/IconPair";


const BookPage = ({ data }) => {

  return (
    <Layout>
      <Container>
        <Row>
        <Row>
          <Col>
            <div className='d-flex justify-content-between mx-4 py-5 align-items-center' style={{borderBottom: '1px solid #bbb'}}>
              <Title  style={{borderBottom: 'none'}}>Unbridled Series</Title>
              <IconPair />
            </div>
          </Col>
        </Row>
        </Row>
        <Row className={`${styles.UBSRow} d-flex justify-content-center align-items-center text-center my-4`}>
            <Col className={styles.UBSColumn1}>

                  <StaticImage className={styles.UBSv1Cover} placeholder="blurred"
                    alt="Unbridled Series Vol. 1 Cover"
                    src='../../images/UBS-V1-Cover.jpg'
                  />
                  <a href='https://www.amazon.com/dp/1619616815/' target='_blank' aria-label='Book Link' rel="noreferrer">
                    <button className={styles.UBSv1Button}>
                      <b>
                        Purchase Here: Unbridled Spirit Volume 1
                      </b>
                    </button>
                  </a>

            </Col>
            <Col className={`${styles.UBSColumn2} text-center`}>
              <StaticImage className={styles.UBSv2Cover} placeholder="blurred"
                  alt="Unbridled Series Vol. 2 Cover"
                  src='../../images/UBS-V2-Cover.jpg'
                />
                 <a href='https://www.amazon.com/Unbridled-Spirit-Kentuckys-Successful-Entrepreneurs/dp/1544536704' target='_blank' rel="noreferrer">
                  <button className={styles.UBSv2Button}>
                    <b>
                      Purchase Here: Unbridled Spirit Volume 2
                    </b>
                  </button>
                </a>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center text-center my-4'>
            <div class="row-fluid center-block" className={styles.UBSv1Text}>
              <Body>Famous for college basketball, horse racing, bourbon, coal, and bluegrass music, the Commonwealth of
              Kentucky is also home to industries and opportunities not normally associated with it. Compiled by the      
              Kentucky Entrepreneur Hall of Fame, Unbridled Spirit shares the success stories of twenty of its members—
              business leaders who dared to think beyond the region’s best known institutions—to encourage the next
              generation of entrepreneurs from the Bluegrass State.</Body>
            </div>
        </Row>
        <Row>
          <div className='align-items-center'>
              <StaticImage className={styles.UBSv2CoverBig} placeholder="blurred"
                    alt="Unbridled Series Vol. 2 Cover"
                    src='../../images/UBS-V2-Cover.jpg'
                  />
            <div className={`{styles.UBSDescription} align-items-center`}>
              <Body>In this inspiring second installment of the Amazon bestseller, Unbridled Spirit,
              the Kentucky Entrepreneur Hall of Fame recognizes and celebrates the
              contributions and accomplishments of 19 entrepreneurs across the state.
             Unbridled Spirit Volume 2 shares the success stories of seasoned
              entrepreneurs who continue to redefine what it is to be a Kentuckian.</Body>
            </div>
            <div className={`${styles.UBSDescription} py-3 align-items-center`}>
            <Body>These Hall of Famers have overcome the odds, stepped up in the face of
            adversity, and built innovative, prosperous ventures. The Kentucky
            Entrepreneur Hall of Fame is proud to recount their stories and hard-earned
            wisdom in this exciting second volume of all-American success.</Body>
            <Body><ul><li>
              <a className={styles.link} href='https://www.amazon.com/dp/1544536704' target='_blank' rel="noreferrer">Purchase Here: Unbridled Spirit Volume 2</a>
              </li></ul></Body>  
            </div>
          </div>
        </Row>
        <Row>
          <div className='align-items-center'>
              <StaticImage className={styles.UBSv2CoverBig} placeholder="blurred"
                    alt="Unbridled Series Vol. 1 Cover"
                    src='../../images/UBS-V1-Cover.jpg'
                  />
            <div className={styles.UBSDescription}>
              <Body>Kentucky’s history of being a small impoverished state didn’t stop
              entrepreneurial Kentuckians like tech inventor and DataBeam founder Lee
              Todd and former Milwaukee-Bucks-superstar-turned-restaurant-franchiser
              Junior Bridgeman from overcoming adversity, pursuing their dreams, and
              achieving their goals. These Hall of Famers, and the others profiled in this
              book, have built prosperous careers that have redefined what it means to be
              Kentuckian, inspiring others in communities throughout the Commonwealth to
              step outside the box and create their own business legacies in twenty-first
              century America.</Body>
              <Body><h3>Stories inside include:</h3></Body>  
              <Body><ul>
                <li>What Jim Host (Host Communications) did after going from having 
                  $1,800,000 to being in debt $560,000 (inflation adjusted) in 1967 when he 
                  was 28 years old. - page 50</li>
                <li>The investment Bill Gatton (Bill Gatton Motors) made when he was 8 years
                  old - page 192</li>
                <li>What nine Harvard business professors told John Y. Brown Jr when he
                  asked for advice about running KFC (hint: the conversation was short) - 
                  page 36</li>
              </ul>
              </Body>
            </div>
          </div>
        </Row>
        <Row>
          <div className={`{styles.aboutAuthor} align-items-center`}>
          <Body><h3>About the Author</h3></Body>
          <Body>Founded by Kentucky entrepreneurs Brian Raney, Luke Murray, Nick Such, and Bobby Clark, the Kentucky Entrepreneur Hall of Fame is an organization that
          shares and celebrates stories of Kentucky’s most successful entrepreneurs. The Hall of Fame’s mission is to raise awareness and shine a spotlight on the impact
          entrepreneurship has on the Commonwealth of Kentucky, while encouraging others to pursue similarly ambitious endeavors. This volume was compiled by
          Garrett Fahrbach, who manages the Outreach and Storytelling programs at Awesome Inc. He maintains the relationships between the Kentucky Entrepreneur
          Hall of Fame inductees and Awesome Inc along with team members Brian Raney and Keith McMunn.</Body>
          </div>
        </Row>
        <Row>
        <div className={`{styles.aboutAuthor} align-items-center`}>
          <Body><h3>Check out samples from the Audio version of Unbridled Spirit:</h3></Body>
          <Body><ul><li>
              <a  className={styles.link} href='https://www.instagram.com/p/BuXfzSyhFsr/?utm_source=ig_web_button_share_sheet' target='_blank' rel="noreferrer">Junior Bridgeman</a>
              </li>
              <li>
              <a className={styles.link} href='https://www.instagram.com/p/BtzIZFAh6Ow/?utm_source=ig_web_button_share_sheet' target='_blank' rel="noreferrer">Lee Todd</a>
              </li>
              <li>
              <a className={styles.link} href='https://www.instagram.com/p/BuEqiFYBh-o/?utm_source=ig_web_button_share_sheet' target='_blank' rel="noreferrer">Jim Host</a>
              </li>
              </ul></Body>  
            <Body>Pick up a copy of the audio book here:</Body>
            <Body><ul><li>
              <a className={styles.link} href='http://amzn.to/2yrO97K' target='_blank' rel="noreferrer">Unbridled Spirit on Amazon</a>
              </li>
              <li>
              <a className={styles.link} href='https://adbl.co/2zJeaxo' target='_blank' rel="noreferrer">Unbridled Spirit on Audible (Sign in with your Amazon account too!)</a>
              </li>
              <li>
              <a className={styles.link} href='https://itunes.apple.com/us/audiobook/unbridled-spirit-lessons-in-life-business-from-kentuckys/id1441679300' target='_blank' rel="noreferrer">Unbridled Spirit on iTunes</a>
              </li>
              </ul></Body>  
            <Body>Inquiries about using the book for a class on business, entrepreneurship and/or Kentucky history, please email <a className={styles.link} href='mailto:garrett.fahrbach@entrepreneurhof.com' target='_blank' rel="noreferrer">garrett.fahrbach@entrepreneurhof.com</a></Body>
        </div>
        </Row>
        <Sponsors />
    </Container>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allSanityInductee {
      nodes {
        inductee {
          name
          company
          profilePhoto {
            asset {
              gatsbyImageData
            }
          }
          year(formatString: "YYYY")
          title
        }
        inductionCeremonyVideo
        profileVideo
        slug {
          current
        }
      }
    }
    allSanityEmergingEntrepreneur {
      nodes {
        inductee {
          name
          company
          title
          year(formatString: "YYYY")
          profilePhoto {
            asset {
              gatsbyImageData
            }
          }
        }
        linkedin
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;


export default BookPage;

export const Head = () => <title>HOF Book</title>

import React, {useState} from "react"
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './presentingsponsorblock.module.scss';

const PresentingSponsorBlock = () => {

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

  return (
    <>
      {presentingSponsor.map((node, index) => (
        <div className={`${styles.sponsorBlockDiv}`}>

        <p className={`${styles.sponsorBlockText}`}>
        presented by 
          
        </p>
        <span style={{ marginLeft: "10px", }}>

             <GatsbyImage
                 image={node.image.asset.gatsbyImageData}
                 imgStyle={{
                     objectFit: 'contain',
                     width: '160px',
                     height: '40px',
                 }}
                 style={{
                     width: '160px',
                     height: '40px',
                 }}
                 layout='fixed'
                 alt="Hall of Fame Presenting Sponsor"
             />
        </span>

          
        </div>
      ))}
    </>
  )
    
}

export default PresentingSponsorBlock;
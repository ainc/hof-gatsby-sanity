import React, {useState} from "react"
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby';

const PresentingSponsorBlock = () => {

  const query = useStaticQuery(graphql`
    query SponsorsQuery {
        allSanitySponsors(sort: {name: ASC}) {
          nodes {
            sponsorType
            name
            image {
              asset {
                gatsbyImageData(
                width: 200
                )
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
        <div>

        <p>
        presented by 
          <span style={{marginLeft: "10px",}}>
           
          <GatsbyImage 
              image={node.image.asset.gatsbyImageData}  
              imgStyle={{ 
                objectFit: 'contain',
              }} 
              alt="Hall of Fame Presenting Sponsor" 
            />
          </span>
        </p>

          
        </div>
      ))}
    </>
  )
    
}

export default PresentingSponsorBlock;
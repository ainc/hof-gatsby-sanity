import React from "react"
import { graphql } from 'gatsby'
import { Container, Col } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/TempSponsors";
import Title from "../../components/Title/Title";
import '../../styles/main.scss';
import * as styles from './im.module.scss'
import IMCard from "../../components/IMCard/IMCard";


const InverstorMentor = ({ data }) => {

  const allIM = data.allSanityInvestorMentor.nodes;

  const IMNav = ({allIM}) => {
    let currentYear = null;
    return (
        <div className={styles.spacing}>
        {allIM.map(node => {
            const year = node.year;
            const yearHeading = year !== currentYear ? <h3>{year}</h3> : null;
            currentYear = year;
            if (yearHeading !== null){
              return (
                <>
                <div className={styles.across}>
                <Title className={styles.space}>
                    {yearHeading}
                </Title>
                </div>
                <Col>
                <IMCard img={node.profilePhoto.asset.gatsbyImageData} name={node.name} type={node.type} linkedin={node.linkedin}/>
                </Col>
                </>
              );
            }else{
              return(
                <Col>
                <IMCard img={node.profilePhoto.asset.gatsbyImageData} name={node.name} type={node.type} linkedin={node.linkedin}/>
                </Col>
              );
            }

            
        })}
        </div>
    );
} 
  return (
    <Layout>
      <Container>
          <IMNav allIM = {allIM}/>
      </Container>
      <Sponsors />
    </Layout>
  )
}
export const query = graphql`
query IMquery{
  allSanityInvestorMentor(sort: {year: DESC}) {
    nodes {
      year(formatString: "YYYY")
      linkedin
      profilePhoto {
        asset {
          gatsbyImageData
        }
      }
      type
      name
    }
  }
}
`;


export default InverstorMentor;

export const Head = () => <title>Investors Mentors</title>
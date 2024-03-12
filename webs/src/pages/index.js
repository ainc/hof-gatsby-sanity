import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss';
import * as styles from './index.module.scss'
import Layout from "../components/Layout/Layout";

const IndexPage = ({data}) => {
  const allSanityInductee = data.allSanityInductee.nodes;
  const [selectedYear, setSelectedYear] = useState(null);

  // Function to handle year selection
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };
  // Filter inductees based on the selected year
  const filteredInductees = selectedYear ? allSanityInductee.filter(inductee => inductee.year === selectedYear) : allSanityInductee;

  return (
    <Layout>
      <Row>
        <Col md={1}>
          <h2>Inductees</h2>
        </Col>
        <Col>
          <Nav as="ul" className={styles.navFilter}>
            <Nav.Item as="li" onClick={() => handleYearClick(null)} tabIndex='-1'>All</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2023")} tabIndex='-1'>2023</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2022")} tabIndex='-1'>2022</Nav.Item>
            {/* Add more years here */}
          </Nav>
        </Col>
      </Row>
      <ul className={styles.inducteesList}>
        {filteredInductees.map((node, index) => (
          <li key={index}>
            <InducteeCard img={node.profilePhoto.asset.gatsbyImageData} name={node.name} company={node.company} link={node.slug.current}/>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allSanityInductee {
      nodes {
        name
        company
        year
        profilePhoto {
          asset {
            gatsbyImageData(height: 300, width: 300)
          }
        }
        bio
        slug{
          current
        }
      }
    }
  }
`;


export default IndexPage

export const Head = () => <title>Home Page</title>

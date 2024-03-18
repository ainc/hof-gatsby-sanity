import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../InducteeCard/InducteeCard";
import * as styles from './inducteenav.module.scss';

const InducteeNav = ( props ) => {
  const data = props.data
  const [selectedYear, setSelectedYear] = useState(null);

  // Function to handle year selection
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };
  
  // Filter inductees based on the selected year
  const filteredInductees = selectedYear ? data.filter(node => node.inductee.year === selectedYear) : data;

  return (
    <Container>
      <Row>
        <Col md={1}>
          <h2>{props.title}</h2>
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
            <InducteeCard img={node.inductee.profilePhoto.asset.gatsbyImageData} name={node.inductee.name} company={node.inductee.company} link={props.title === "Inductees" ? node.slug.current : node.linkedin}/>
          </li>
        ))}
        </ul>
    </Container>
  )
}



export default InducteeNav;

export const Head = () => <title>Home Page</title>

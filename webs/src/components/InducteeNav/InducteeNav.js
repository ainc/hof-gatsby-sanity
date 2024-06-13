import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import InducteeCard from "../InducteeCard/InducteeCard";
import Title from "../Title/Title";
import * as styles from './inducteenav.module.scss';
import Body from "../Body/Body";
const InducteeNav = ( props ) => {
  const data = props.data
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year

  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    setSelectedYear(year); // Update state when a year is clicked
    props.setSelectedYear(year);
  };
  
  // Filter inductees based on the selected year
  const filteredInductees = props.selectedYear ? data.filter(node => node.inductee.year === props.selectedYear) : data;

  return (
    <Container className='d-flex flex-column'>
      <div className='d-flex align-items-center justify-content-sm-between pb-5' style={{borderBottom: '1px solid #bbb'}}>
          <Title className="mx-3" style={{borderBottom: 'none'}}>{props.title}</Title>
          {/*Nav for large screens and wider */}
          <Nav as="ul" className={`${styles.navFilter} d-none d-lg-block`}>
            <Nav.Item as="li" onClick={() => handleYearClick(null)} tabIndex='-1'>All</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2023")} tabIndex='-1'>2023</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2022")} tabIndex='-1'>2022</Nav.Item>
            
            {/* Add more years here */}
          </Nav>
          {/*Nav for medium screens and smaller */}
          <Nav as="ul" className={` d-lg-none`}>
            <NavDropdown  className={styles.titleStyle} title={selectedYear || "Select Year"} id="collapsable-nav-dropdown">
              <NavDropdown.Item onClick={() => handleYearClick(null)}>
                All
              </NavDropdown.Item>   
              <NavDropdown.Item onClick={() => handleYearClick("2023")}>
                2023
              </NavDropdown.Item>    
              <NavDropdown.Item onClick={() => handleYearClick("2022")}>
                2022
              </NavDropdown.Item>         
            {/* Add more years here */}
            </NavDropdown>
          </Nav>
      </div>
      <div className='py-3'>
        <ul className={styles.inducteesList}>
          {filteredInductees.map((node, index) => (
            <li key={index}>
              <InducteeCard img={node.inductee.profilePhoto.asset.gatsbyImageData} name={node.inductee.name} company={node.inductee.company} link={props.title === "Inductees" ? node.slug.current : node.linkedin}/>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}



export default InducteeNav;
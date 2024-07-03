import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import InducteeCard from "../InducteeCard/InducteeCard";
import Title from "../Title/Title";
import * as styles from './videonav.module.scss';
import Body from "../Body/Body";

const VideoNav = ( props ) => {
  const data = props.data
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year

  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    setSelectedYear(year); // Update state when a year is clicked
    props.setSelectedYear(year);
  };
  
  // Filter inductees based on the selected year
  props.filtered = props.selectedYear ? data.filter(node => node.inductee.year === props.selectedYear) : data;

  return (
    <Container className='d-flex flex-column'>
      <div className={`${styles.navBetween} d-flex align-items-center pb-5`} style={{borderBottom: '1px solid #bbb'}}>
        <div>
          <Title className="mx-3" style={{borderBottom: 'none'}}>{props.title}</Title>
        </div>
        <div>
          {/*Nav for large screens and wider */}
          <Nav as="ul" className={`${styles.navFilter} d-none d-lg-block`}>
            <Nav.Item as="li" onClick={() => handleYearClick(null)} tabIndex='-1'>All</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2023")} tabIndex='-1'>2023</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2022")} tabIndex='-1'>2022</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2021")} tabIndex='-1'>2021</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2020")} tabIndex='-1'>2020</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2019")} tabIndex='-1'>2019</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2018")} tabIndex='-1'>2018</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2017")} tabIndex='-1'>2017</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2016")} tabIndex='-1'>2016</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2015")} tabIndex='-1'>2015</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2014")} tabIndex='-1'>2014</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2013")} tabIndex='-1'>2013</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2012")} tabIndex='-1'>2012</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2011")} tabIndex='-1'>2011</Nav.Item>
            <Nav.Item as="li" onClick={() => handleYearClick("2010")} tabIndex='-1'>2010</Nav.Item>
          </Nav>
          {/*Nav for medium screens and smaller */}
          <Nav as="ul" className={`d-lg-none`}>
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
      </div>
    </Container>
  )
}



export default VideoNav;
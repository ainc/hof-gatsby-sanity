import React, {useState} from "react"
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import InducteeCard from "../InducteeCard/InducteeCard";
import Title from "../Title/Title";
import * as styles from './inducteenav.module.scss';

const InducteeNav = ( props ) => {
  const data = props.data
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year

  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    setSelectedYear(year); // Update state when a year is clicked 
    props.setSelectedYear(year);
  };
  
  const years = [];
  for(let i = 0; i < data.length; i++){
    if(!(years.includes(data[i].inductee.year))){
      years.push(data[i].inductee.year);
      if(data[i].inductee.year == '2021' && !(years.includes('2020'))){
        years.push('2020');
      }
    }
  }
  

  // Filter inductees based on the selected year
  if(props.selectedYear !== "2020"){
    const filteredInductees = props.selectedYear ? data.filter(node => node.inductee.year === props.selectedYear) : data;

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
            {years.map((node) => (
              <Nav.Item as="li" onClick={() => handleYearClick(node)} tabIndex='-1'>{node}</Nav.Item>
            ))}
            </Nav>
            {/*Nav for medium screens and smaller */}
            <Nav as="ul" className={`d-lg-none`}>
              <NavDropdown  className={styles.titleStyle} title={selectedYear || "Select Year"} id="collapsable-nav-dropdown">
                <NavDropdown.Item onClick={() => handleYearClick(null)}>
                  All
                </NavDropdown.Item>
                {years.map((node) => (
             <NavDropdown.Item onClick={() => handleYearClick(node)}>
              {node}
            </NavDropdown.Item>    
            ))}
              {/* Add more years here */}
              </NavDropdown>
            </Nav>
          </div>
        </div>
        <div className='py-3 mx-5 d-flex justify-content-center'>
          <ul className={`${styles.inducteesList}`}>
            {filteredInductees.map((node, index) => (
              <li key={index}>
                <InducteeCard img={node.inductee.profilePhoto.asset.gatsbyImageData} name={node.inductee.name} company={node.inductee.company} link={props.title === "Inductees" ? node.slug.current : node.linkedin}/>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    )
  }else{
    return(
      <Container className='d-flex flex-column'>
        <div className={`${styles.navBetween} d-flex align-items-center pb-5`} style={{borderBottom: '1px solid #bbb'}}>
          <div>
            <Title className="mx-3" style={{borderBottom: 'none'}}>{props.title}</Title>
          </div>
          <div>
            {/*Nav for large screens and wider */}
            <Nav as="ul" className={`${styles.navFilter} d-none d-lg-block`}>
              <Nav.Item as="li" onClick={() => handleYearClick(null)} tabIndex='-1'>All</Nav.Item>
              {years.map((node) => (
                <Nav.Item as="li" onClick={() => handleYearClick(node)} tabIndex='-1'>{node}</Nav.Item>
              ))}
            </Nav>
            {/*Nav for medium screens and smaller */}
            <Nav as="ul" className={`d-lg-none`}>
              <NavDropdown  className={styles.titleStyle} title={selectedYear || "Select Year"} id="collapsable-nav-dropdown">
                <NavDropdown.Item onClick={() => handleYearClick(null)}>
                  All
                </NavDropdown.Item>   
                {years.map((node) => (
                  <NavDropdown.Item onClick={() => handleYearClick(node)}>
                    {node}
                  </NavDropdown.Item>    
                  ))}    
              {/* Add more years here */}
              </NavDropdown>
            </Nav>
          </div>
        </div>
        <div className='py-3'>
          <div className={styles.tbox}>
         Wondering why there is no 2020 class? Unfortunately, the ceremony was canceled in 2020 and we weren't able to induct any entrepreneurs. But fear not, entrepreneurship and innovation didn't come to a halt. Future classes are going to be even stronger in Kentucky!
          </div>
          
        </div>
      </Container>
    )
  }
}



export default InducteeNav;
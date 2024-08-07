import React, {useState, useRef} from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Isotope from "isotope-layout"
import InducteeCard from "../InducteeCard/InducteeCard";
import Title from "../Title/Title";
import * as styles from './inducteenav.module.scss';

const InducteeNav = (props) => {

  const data = props.data
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year
  const [animation, setAnimation] = useState(null);
  const navsRef = useRef(null);
  const animationRef = useRef(null);
   // const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState('*');
  const isotope = useRef(null);
  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    //setSelectedYear(year); // Update state when a year is clicked
    //props.setSelectedYear(year);
    handleFilter(year ? `year-${year}` : '*');
  };
  
  

  React.useEffect(() => {
    try {
    isotope.current = new Isotope('.inductee-list', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
  } catch (error) {
    console.error("Error initializing Isotope:", error);
  }

    // cleanup
    return () => 
      {
        if (isotope.current) {
          isotope.current.destroy();
        }
      }
  }, [])

  React.useEffect(() => {
    if (isotope.current) {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
    }
  }, [isotope, filterKey])

  const handleFilter = (key) => {setFilterKey(key);}

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
            <Nav as="ul" className={`${styles.navFilter} d-none d-lg-block`} ref={navsRef}>
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
                <NavDropdown.Item  onClick={() => handleYearClick(null)}>
                  All
                </NavDropdown.Item>   
                <NavDropdown.Item  onClick={() => handleYearClick("2023")}>
                  2023
                </NavDropdown.Item>    
                <NavDropdown.Item  onClick={() => handleYearClick("2022")}>
                  2022
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => handleYearClick("2021")}>
                  2021
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2020")}>
                  2020
                </NavDropdown.Item> 
                <NavDropdown.Item  onClick={() => handleYearClick("2019")}>
                  2019
                </NavDropdown.Item>   
                <NavDropdown.Item  onClick={() => handleYearClick("2018")}>
                  2018
                </NavDropdown.Item>   
                <NavDropdown.Item  onClick={() => handleYearClick("2017")}>
                  2017
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2016")}>
                  2016
                </NavDropdown.Item>   
                <NavDropdown.Item  onClick={() => handleYearClick("2015")}>
                  2015
                </NavDropdown.Item>       
                <NavDropdown.Item  onClick={() => handleYearClick("2014")}>
                  2014
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2013")}>
                  2013
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2012")}>
                  2012
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2011")}>
                  2011
                </NavDropdown.Item>  
                <NavDropdown.Item  onClick={() => handleYearClick("2010")}>
                  2010
                </NavDropdown.Item>  
              {/* Add more years here */}
              </NavDropdown>
            </Nav>
          </div>
        </div>
        <div className='py-3 d-flex justify-content-center'>
          <ul className={`w-100 mx-auto inductee-list ${styles.inducteesList}`}>
            {filteredInductees.map((node, index) => (
                <li key={index}>
                  <InducteeCard 
                    img={node.inductee.profilePhoto.asset.gatsbyImageData} 
                    name={node.inductee.name} 
                    company={node.inductee.company} 
                    link={props.title === "Inductees" ? node.slug.current : node.linkedin}
                    year={node.inductee.year}
                    className={`filter-item year-${node.inductee.year}`}
                  ></InducteeCard>
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
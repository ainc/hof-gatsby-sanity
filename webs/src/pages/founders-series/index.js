import React, {useState, useRef} from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col, Nav , NavDropdown } from 'react-bootstrap';
import '../../styles/main.scss'; 
import * as styles from './founders-series.module.scss'
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import Title from "../../components/Title/Title";
import Body from "../../components/Body/Body";
import IconPair from "../../components/IconPair/IconPair";
import Video from "../../components/Video/Video";
import Isotope from "isotope-layout"

const FoundersSeries = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year
  const [filterKey, setFilterKey] = React.useState('*');
  const isotope = useRef(null);

  var fitRows = Isotope.LayoutMode.modes.fitRows.prototype;
  fitRows._resetLayout = function() {

    // pre-calculate offsets for centering each row
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.centerX = [];
    this.currentRow = 0;
    this.initializing = true;
    for ( var i=0, len = this.items.length; i < len; i++ ) {
        var item = this.items[i];
        this._getItemLayoutPosition(item);
    }
    this.centerX[this.currentRow].offset = (this.isotope.size.innerWidth +this.gutter-this.x) / 2;
    this.initializing = false;
    this.currentRow = 0;

    // centered offsets were calculated, reset layout
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement( 'gutter', 'outerWidth' );
  };
  fitRows._getItemLayoutPosition = function( item ) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    // if this element cannot fit in the current row
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {

      if (this.initializing)
          this.centerX[this.currentRow].offset = (containerWidth-this.x) / 2;
      this.currentRow++;

      this.x = 0;
      this.y = this.maxY;
    }

    if (this.initializing && this.x === 0) {
      this.centerX.push({ offset: 0});
    }
    //if (this.centerX[this.currentRow].offset < 0)
    //  this.centerX[this.currentRow].offset = 0;

    var position = {
      x: this.x+(this.initializing?0:this.centerX[this.currentRow].offset),
      y: this.y
    };

    this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
    this.x += itemWidth;

    return position;
  };
  
  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    setSelectedYear(year); // Update state when a year is clicked
    if (!year) {
      handleFilter('*');
    } else {
      handleFilter(`year-${year}`);
    }
  };

  React.useEffect(() => {
    try {
    isotope.current = new Isotope(`.inductee-list`, {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
      filter: '*',
      transitionDuration: '0.6s', // Adjust this value to make the animation slower
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
      if (filterKey === '*') {
        isotope.current.arrange({
          filter: `*`
        });
      } else {
        isotope.current.arrange({
          filter: `.${filterKey}`
        });
      }
    }
  }, [filterKey]);

  const handleFilter = (key) => {
    setFilterKey(key);
  };

  const filteredInductees = data.allSanityFoundersSeries.nodes;

  return (
    <Layout>
      <Container className=''>
        <Row>
          <Col>
            <div className='d-flex justify-content-between py-5 align-items-center' style={{borderBottom: '1px solid #bbb'}}>
              <Title  className='w-25' style={{borderBottom: 'none'}}>Founders Series</Title>
              <div className={`${styles.navBetween} d-flex align-items-center`} >
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
                  <Nav.Item as="li" onClick={() => handleYearClick("-1")} tabIndex='-1'>Noteworthy Entrepreneurs</Nav.Item>
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
                    <NavDropdown.Item onClick={() => handleYearClick("2021")}>
                      2021
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleYearClick("2020")}>
                      2020
                    </NavDropdown.Item> 
                    <NavDropdown.Item onClick={() => handleYearClick("2019")}>
                      2019
                    </NavDropdown.Item>   
                    <NavDropdown.Item onClick={() => handleYearClick("2018")}>
                      2018
                    </NavDropdown.Item>   
                    <NavDropdown.Item onClick={() => handleYearClick("2017")}>
                      2017
                    </NavDropdown.Item>  
                    <NavDropdown.Item onClick={() => handleYearClick("2016")}>
                      2016
                    </NavDropdown.Item>   
                    <NavDropdown.Item onClick={() => handleYearClick("2015")}>
                      2015
                    </NavDropdown.Item>       
                    <NavDropdown.Item onClick={() => handleYearClick("2014")}>
                      2014
                    </NavDropdown.Item>  
                    <NavDropdown.Item onClick={() => handleYearClick("2013")}>
                      2013
                    </NavDropdown.Item>  
                    <NavDropdown.Item onClick={() => handleYearClick("2012")}>
                      2012
                    </NavDropdown.Item>  
                    <NavDropdown.Item onClick={() => handleYearClick("2011")}>
                      2011
                    </NavDropdown.Item>  
                    <NavDropdown.Item onClick={() => handleYearClick("2010")}>
                      2010
                    </NavDropdown.Item>             
                  {/* Add more years here */}
                  </NavDropdown>
                </Nav>
              </div>
              <IconPair />
            </div>
          </Col>
        </Row>
        <Row>
          <div className={styles.heading}>
            <Body>In order to share the success stories of Kentucky's entrepreneurs on a larger scale, we launched a video series where we interviewed each HOF inductee.</Body>
          </div>
        </Row>
        <ul className={`inductee-list ${styles.videoList}`}>
          {
            filteredInductees.map(node => (
              <li className={`filter-item year-${node.year}`}>
                <div className='w-100'>
                  <Video link={node.videoEmbedLink} title={node.title} preview={node.preview} styles={{width: '100%'}}/>
                </div>
              </li>
            ))
          }
        </ul>
      </Container>
      <Sponsors />
    </Layout>
  )
}
export const query = graphql`
  query FoundersSeriesPageQuery {
    allSanityFoundersSeries(sort: {year: DESC}) {
      nodes {
        videoEmbedLink
        title
        preview {
          asset {
            gatsbyImageData(width: 430, height: 275)
          }
        }
        year (formatString: "YYYY")
      }
    }
  }
`;

export default FoundersSeries;

export const Head = () => <title>Founders Series</title>

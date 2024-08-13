import React, {useState} from "react"
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

const FoundersSeries = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null); // Initialize state for selected year

  // Function to handle year selection - pass in state values as props because each instance of the component needs to handle its own state
  const handleYearClick = (year) => {
    setSelectedYear(year); // Update state when a year is clicked
  };

  const filteredInductees = selectedYear ? data.allSanityFoundersSeries.nodes.filter(node => node.year === selectedYear) : data.allSanityFoundersSeries.nodes;

  const years = [];
  for(let i = 0; i < data.allSanityFoundersSeries.nodes.length; i++){
    if(!(years.includes(data.allSanityFoundersSeries.nodes[i].year)) && data.allSanityFoundersSeries.nodes[i].year != '0000'){
      years.push(data.allSanityFoundersSeries.nodes[i].year);
      if(data.allSanityFoundersSeries.nodes[i].year == '2021' && !(years.includes('2020'))){
        years.push('2020');
      }
    }
  }
  console.log("hi");
  console.log(years);

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
                  {years.map((node) => (
                    <Nav.Item as="li" onClick={() => handleYearClick(node)} tabIndex='-1'>{node}</Nav.Item>
                  ))}
                  <Nav.Item as="li" onClick={() => handleYearClick("0000")} tabIndex='-1'>Noteworthy Entrepreneurs</Nav.Item>
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
                    <NavDropdown.Item onClick={() => handleYearClick("0000")}>
                      Noteworthy Entrepreneurs
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
        <Row className=''>
          {
            filteredInductees.map(node => (
              <Video link={node.videoEmbedLink} title={node.title} preview={node.preview}/>
            ))
          }
        </Row>
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

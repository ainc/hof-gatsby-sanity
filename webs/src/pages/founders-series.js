import React, {useState} from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import InducteeCard from "../components/InducteeCard/InducteeCard";
import '../styles/main.scss'; 
import * as styles from './index.module.scss'
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/sponsors";
import InducteeNav from "../components/InducteeNav/InducteeNav";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
import Button from "../components/Button/Button";

const FoundersSeries = ({}) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Title className='mx-4 py-5'>About Us</Title>
          </Col>
        </Row>
        <Row>
          <Col className='mx-4 py-5'>
            <Body>The Kentucky Entrepreneur Hall of Fame is a physical and virtual destination that shares and celebrates the stories of Kentucky's most successful entrepreneurs.</Body>
            <Body>Our mission is to raise awareness of the impact that entrepreneurship has made in the Commonwealth and encourage others to pursue similar ambitious endeavors.</Body>
            <Body>Nominations are open for the current year's class. To nominate, fill out this form. Anyone can nominate.</Body>
            <Body>If you have questions or would like to become involved please email us at <a className='link' href='mailto:ky@entrepreneurhof.com' target="_blank">ky@entrepreneurhof.com</a>.</Body>
          </Col>
          <Col>{/* Images go here*/}</Col>
        </Row>
      </Container>
    </Layout>
  )
}


export default FoundersSeries;

export const Head = () => <title>Founders Series</title>

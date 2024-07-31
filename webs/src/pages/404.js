import * as React from "react"
import { Link } from "gatsby"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout/Layout";
import Sponsors from "../components/Sponsors/sponsors";
import Title from "../components/Title/Title";

const NotFoundPage = () => {
  return (
    <Layout>
      <Row>
      <Col className='py-5 mx-4'>
      <Title className='py-5 mx-4 align-items-center'>Oops! There’s no page located here.</Title>
      </Col>
      </Row>
      <Row>
        <Col className='py-5 mx-4'>
        <Sponsors className='py-5 mx-4'/>
        </Col>
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

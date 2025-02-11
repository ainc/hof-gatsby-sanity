import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "../../components/Title/Title";
import * as styles from "./fellowship.module.scss";
import IconPair from "../../components/IconPair/IconPair";

const FellowshipPage = () => {
  return (
    <Layout>
      <Container>
        <Title className="d-flex justify-content-between pt-3 pb-5">
          <h2>Awesome Inc Fellowship Program</h2>
          <IconPair />
        </Title>
        <Row className="pb-5 pt-3">
          <Col lg={6} sm={12}>
            <p>
              The Fellowship program is a Kentucky Entrepreneur Hall of Fame
              initiative designed to accelerate the growth of Kentucky’s next
              wave of high potential entrepreneurs and tech startups. Companies
              with demonstrated market potential receive access to mentors and
              investors, legal services, and technical talent.
            </p>
            <p>
              Our mission is to raise awareness of the impact that
              entrepreneurship has made in the Commonwealth and encourage others
              to pursue similar ambitious endeavors.
            </p>
            <p>
              With mentorship and support of the Kentucky Entrepreneurship Hall
              of Fame inductees, Fellowship companies have raised over $154m in
              outside funding as well as created over 784 jobs for the state of
              Kentucky.
            </p>
            <a
              href="https://awesomeinc.org/fellowship"
              target="_blank"
              rel="noreferrer"
            >
              <Button className={styles.button}>
                Learn more about the Fellowship Program
              </Button>
            </a>
          </Col>
          <Col lg={6} sm={12}>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.timwebbphotography.com/p377969083"
              style={{ color: "#666" }}
              className="float-end mt-3"
            >
              See All Photos <i class="icon-caret-right"></i>
            </a>
          </Col>
        </Row>

        <Sponsors />
      </Container>
    </Layout>
  );
};

export default FellowshipPage;

export const Head = () => <title>Fellowship</title>;

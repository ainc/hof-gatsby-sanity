import React from "react";
import { graphql } from "gatsby";
import { Container, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import Title from "../../components/Title/Title";
import "../../styles/main.scss";
import * as styles from "./im.module.scss";
import IMCard from "../../components/IMCard/IMCard";

const InverstorMentor = ({ data }) => {
  const allIM = data.allSanityInvestorMentor.nodes;

  // Custom type sort order
  const typeOrder = {
    Executive: 0,
    Investor: 1,
    Mentor: 2,
  };

  // Group by year
  const groupedByYear = allIM.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  // Sort years (descending or ascending as needed)
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  const IMNav = ({ groupedData, sortedYears }) => {
    return (
      <div className={styles.spacing}>
        {sortedYears.map((year) => {
          const people = groupedData[year].sort((a, b) => {
            const typeDiff = typeOrder[a.type] - typeOrder[b.type];
            if (typeDiff !== 0) return typeDiff;
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          });

          return (
            <React.Fragment key={year}>
              <div className={styles.across}>
                <Title className={styles.space}>
                  <h3>{year}</h3>
                </Title>
              </div>
              {people.map((node, idx) => (
                <Col key={idx}>
                  <IMCard
                    img={node.profilePhoto.asset.gatsbyImageData}
                    name={node.name}
                    type={node.type}
                    linkedin={node.linkedin}
                  />
                </Col>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <Layout>
      <Container>
        <IMNav groupedData={groupedByYear} sortedYears={sortedYears} />
      </Container>
      <Sponsors />
    </Layout>
  );
};
export const query = graphql`
  query IMquery {
    allSanityInvestorMentor(sort: { year: DESC }) {
      nodes {
        year(formatString: "YYYY")
        linkedin
        profilePhoto {
          asset {
            gatsbyImageData
          }
        }
        type
        name
      }
    }
  }
`;

export default InverstorMentor;

export const Head = () => <title>Investors Mentors</title>;

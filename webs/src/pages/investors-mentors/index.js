import React from "react";
import { graphql } from "gatsby";
import { Container, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import Title from "../../components/Title/Title";
import "../../styles/main.scss";
import * as styles from "./im.module.scss";
import RoleCard from "../../components/IMCard/IMCard";
/* Changed IMCard, allIM and IMNav all to RoleCard, allRoles and RoleNav to future proof them */
const InverstorMentor = ({ data }) => {
  const allRoles = data.allSanityInvestorMentor.nodes;

  // Custom type sort order
  const typeOrder = {
    Executive: 0,
    Investor: 1,
    Mentor: 2,
  };

  // Group by year
  const groupedByYear = allRoles.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  // Sort years (descending or ascending as needed)
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  const RoleNav = ({ groupedData, sortedYears }) => {
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
                  <RoleCard
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
        <RoleNav groupedData={groupedByYear} sortedYears={sortedYears} />
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

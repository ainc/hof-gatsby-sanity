import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Sponsors from "../../components/Sponsors/Sponsors";
import IconPair from "../../components/IconPair/IconPair";
import Title from "../../components/Title/Title";
import { Container, Button, Stack } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { format } from "date-fns";
import * as styles from "./nominate.module.scss";

const NominatePage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityNominationFormPage {
        note
        deadline
        buttons {
          _key
          text
          deadline
          url
        }
      }
    }
  `);

  const {
    note = "",
    deadline = "",
    buttons = [],
  } = data?.sanityNominationFormPage || {};

  return (
    <Layout>
      <Container>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <Title className={styles.header}>
          <h2>Nominate</h2>
          <IconPair className={styles.icons} />
        </Title>
        <section style={{ color: "rgb(102,102,102)" }}>
          {note && (
            <p>
              <b>Note: </b> {note}{" "}
              {deadline && (
                <span>
                  <b>Deadline: {deadline}</b>
                </span>
              )}
            </p>
          )}
          <h2>Selection Criteria</h2>
          <ul>
            <li>Revenue & profit achieved</li>
            <li>Employment generation</li>
            <li>Contribution to industry</li>
            <li>Contributions to community-oriented projects and society</li>
            <li>Innovation of product or service</li>
          </ul>
        </section>
        <Stack gap={3} className={styles.buttonContainer} lg={12}>
          {/* Render buttons */}
          {buttons.length > 0 ? (
            buttons.map((button) => {
              const formattedDate = button.deadline
                ? format(
                    new Date(
                      new Date(button.deadline).setDate(
                        new Date(button.deadline).getDate() + 1,
                      ),
                    ),
                    "M/d/yy",
                  )
                : "No deadline";

              return (
                <Button
                  className={styles.button}
                  key={button._key}
                  href={button.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  disabled={!button.url}
                >
                  {button.text || "Untitled Button"}{" "}
                  {button.deadline && `(Deadline: ${formattedDate})`}
                </Button>
              );
            })
          ) : (
            <p>No nomination forms available at this time.</p>
          )}
        </Stack>
        <Sponsors />
      </Container>
    </Layout>
  );
};

export default NominatePage;

export const Head = () => <title>Nominate</title>;

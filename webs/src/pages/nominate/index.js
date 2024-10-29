import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout/Layout';
import Sponsors from '../../components/Sponsors/Sponsors';
import IconPair from '../../components/IconPair/IconPair';
import Title from '../../components/Title/Title';
import { Container, Button, Stack } from 'react-bootstrap';
import * as styles from './nominate.module.scss';
import { format } from 'date-fns';

const NominatePage = () => {
  // Do a QraphQL query
  //   const data =
  const buttons = data.allSanityNominationFormButton.nodes;

  return (
    <Layout>
      <Container>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Title className={styles.header}>
          <h2>Nominate</h2>
          <IconPair className={styles.icons} />
        </Title>
        <section style={{ color: 'rgb(102,102,102)' }}>
          <p>
            <b>Note:</b> Nominations for the 2024 class and beyond are open.{' '}
            <b>Deadline: May 3, 2024</b>
          </p>
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
          {buttons.map((button) => (
            <Button
              key={button._id}
              className={styles.button}
              href={button.url}
              target="_blank"
              rel="noreferrer"
            >
              {button.text} (click here, deadline:{' '}
              {format(new Date(button.deadline), 'MM/dd/yy')})
            </Button>
          ))}
        </Stack>
        <Sponsors />
      </Container>
    </Layout>
  );
};

export default NominatePage;

export const Head = () => <title>Nominate</title>;

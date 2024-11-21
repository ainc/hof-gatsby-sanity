import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Sponsors from '../../components/Sponsors/Sponsors';
import IconPair from '../../components/IconPair/IconPair';
import Title from '../../components/Title/Title';
import { Container, Button, Stack } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import { format } from 'date-fns';
import * as styles from './nominate.module.scss';

const NominatePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityNominationFormButtonList {
        nodes {
          button {
            _key
            _type
            text
            deadline
            url
          }
        }
      }
    }
  `);
  const buttons = data.allSanityNominationFormButtonList.nodes[0].button;

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
        <section style={{ color: 'rgb(102,102,102)' }}>
          <p>
            <b>Note: </b>Nominations for the 2024 class and beyond is open.{' '}
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
          {buttons.map((button) => {
            const [year, month, day] = button.deadline.split('-').map(Number);
            const localDate = new Date(year, month - 1, day);
            const formattedDate = format(localDate, 'M/d/yy');
            return (
              <Button
                className={styles.button}
                key={button._id}
                href={button.url}
                target="_blank"
                rel="noreferrer"
              >
                {button.text} (click here, deadline: {formattedDate})
              </Button>
            );
          })}
        </Stack>
        <Sponsors />
      </Container>
    </Layout>
  );
};
export default NominatePage;

export const Head = () => <title>Nominate</title>;


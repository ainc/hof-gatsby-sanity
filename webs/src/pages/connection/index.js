import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import "../../styles/main.scss";
import * as styles from "./connection.module.scss";
import mackPhoto from "../../images/connection/mackenzie-hanes.jpeg";
import kylePhoto from "../../images/connection/kyle-raney.jpg";
import maisonPhoto from "../../images/connection/maison.jpg";
import benPhoto from "../../images/connection/ben.jpg";

const team = [
  {
    name: "Mackenzie Hanes",
    title: "Director of Partnerships",
    email: "mackenzie.hanes@awesomeinc.org",
    photo: mackPhoto,
  },
  {
    name: "Maison Rudd",
    title: "Coworking Manager",
    email: "maison.rudd@awesomeinc.org",
    photo: maisonPhoto,
  },
  {
    name: "Ben Strevy",
    title: "Awesome Fund Principal",
    email: "ben.strevy@awesomeinc.org",
    photo: benPhoto,
  },
  {
    name: "Kyle Raney",
    title: "Developer and Solutions Architect",
    email: "kyle.raney@awesomeinc.org",
    photo: kylePhoto,
  },
];

const eventbriteUrl =
  "https://www.eventbrite.com/e/5-across-december-finals-2026-entrepreneur-pitch-competition-awesome-inc-tickets-1980880551052";
const fiveAcrossUrl = "https://awesomeinc.org/events/5across/";

const ConnectionPage = () => {
  return (
    <Layout>
      <Container className={styles.page}>
        <div className="mx-4">
          <header className={styles.hero}>
            <p className={styles.kicker}>After the ceremony</p>
            <h1 className={styles.displayTitle}>Connection Team</h1>
            <p className={styles.lede}>
              Find us at the high tops in the back of the room. We are here to
              connect you with Kentucky&apos;s startup community.
            </p>
          </header>

          <section aria-labelledby="team-heading">
            <Title id="team-heading" className={styles.sectionTitle}>
              The Team
            </Title>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <article key={member.email} className={styles.card}>
                  <div className={styles.photoWrap}>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className={styles.photo}
                      />
                    ) : (
                      <div className={styles.initial} aria-hidden="true">
                        {member.initial}
                      </div>
                    )}
                  </div>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.title}</p>
                  <a
                    className={styles.email}
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                  >
                    Email
                    <span className={styles.emailName}>
                      &nbsp;{member.name.split(" ")[0]}
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="event-heading">
            <Title id="event-heading" className={styles.sectionTitle}>
              Upcoming Event
            </Title>
            <article className={styles.eventCard}>
              <div className={styles.dateBlock}>
                <span className={styles.dateMonth}>Dec</span>
                <span className={styles.dateDay}>2</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventBody}>
                <h3 className={styles.eventName}>5 Across December Finals</h3>
                <dl className={styles.details}>
                  <dt>Date</dt>
                  <dd>Wednesday, December 2, 2026</dd>
                  <dt>Location</dt>
                  <dd>Kentucky Theatre, 214 E Main St, Lexington</dd>
                </dl>
                <ul className={styles.schedule}>
                  <li>
                    <strong>4:30 p.m.</strong> Doors open
                  </li>
                  <li>
                    <strong>5:00 p.m.</strong> Networking and dinner
                  </li>
                  <li>
                    <strong>5:30 p.m.</strong> Pitch competition
                  </li>
                </ul>
                <div className={styles.actions}>
                  <a
                    className={styles.primaryLink}
                    href={eventbriteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get tickets
                  </a>
                  <a
                    className={styles.textLink}
                    href={fiveAcrossUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    More about 5 Across
                  </a>
                </div>
              </div>
            </article>
          </section>

          <section
            aria-label="Coworking day pass"
            className={styles.passSection}
          >
            <div className={styles.ticket}>
              <div className={styles.ticketStub}>
                <span className={styles.ticketLabel}>Day pass</span>
                <span className={styles.ticketKind}>Free coworking</span>
              </div>
              <div className={styles.ticketBody}>
                <p className={styles.ticketNote}>
                  See a member of our Connection Team after the ceremony for a
                  free day of coworking.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default ConnectionPage;

export const Head = () => <title>Connection Team</title>;

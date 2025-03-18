import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderAlertQuery {
      sanityHeaderAlert {
        alertText
        linkText
        linkUrl
      }
    }
  `);

  const {
    alertText = "",
    linkText = "",
    linkUrl = "",
  } = data.sanityHeaderAlert || {};

  return (
    <>
      {alertText && (
        <div className={styles.alert}>
          <p>
            {alertText}
            {linkUrl && (
              <>
                {" "}
                <a
                  href={linkUrl}
                  style={{ color: "#666" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {linkText || "Here"}
                </a>
              </>
            )}
          </p>
        </div>
      )}

      <Container fluid className={`${styles.background} d-none d-lg-block`}>
        <Container>
          <Navbar className={`${styles.nav} py-1 px-2`}>
            <Navbar.Brand href="/">
              <StaticImage
                placeholder="blurred"
                src="../../images/hof-logo.png"
                alt="KEHOF logo"
                style={{ maxWidth: "80px" }}
              />
            </Navbar.Brand>
            <Nav as="ul">
              <Nav.Link as="li" className="mx-2">
                <a href="/media" className={styles.links}>
                  Media
                </a>
              </Nav.Link>
              <Nav.Link as="li" className="mx-2">
                <a href="/book" className={styles.links}>
                  Book
                </a>
              </Nav.Link>
              <Nav.Link as="li" className="mx-2">
                <a href="/founders-series" className={styles.links}>
                  Founders Series
                </a>
              </Nav.Link>
              <Nav.Link as="li" className="mx-2">
                <a href="/fellowship" className={styles.links}>
                  The Fellowship
                </a>
              </Nav.Link>
              <NavDropdown
                title={<span className={styles.links}>Nominate</span>}
                id="collapsable-nav-dropdown"
                className={styles.dropdownMenuLg}
              >
                <NavDropdown.Item
                  className={styles.dropdownItems}
                  href="https://forms.zohopublic.com/virtualoffice9155/form/NominationKentuckyEntrepreneurHallofFame/formperma/RbkleuPk2I_uJqvvP0aAi2DrXVrfwso-QKVOWR6h_EI"
                  target="_blank"
                >
                  Hall of Fame
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdownItems}
                  href="https://forms.zohopublic.com/virtualoffice9155/form/EmergingEntrepreneurNominationKentuckyEntrepreneur/formperma/WlfEONIkD_KdXHI5lfj9kXvZ8SUBgQTaC9bIf9AnGXk"
                  target="_blank"
                >
                  Emerging
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdownItems}
                  href="https://zfrmz.com/HiHnbru8T7pFNW1rTFpw"
                  target="_blank"
                >
                  Mentor
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdownItems}
                  href="https://zfrmz.com/FcyrqHK54OYvk507ovTQ"
                  target="_blank"
                >
                  Investor
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdownItems}
                  href="https://zfrmz.com/PcjCQ9fgz9mjukf8hpv3"
                  target="_blank"
                >
                  President/Executive
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as="li" className="mx-2">
                <a href="/induction-dinner" className={styles.links}>
                  Induction Dinner
                </a>
              </Nav.Link>
              <Nav.Link as="li" className="mx-2">
                <a href="#sponsors" className={styles.links}>
                  Sponsors
                </a>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    </>
  );
};

export default Header;

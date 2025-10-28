import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
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

  const { alertText = "", linkText = "", linkUrl = "" } = data.sanityHeaderAlert || {};
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/" || path.endsWith("index.html")) {
        setIsHomepage(true);
      }
    }
  }, []);

  return (
    <>
      <Container fluid className={`${styles.background} ${isHomepage ? styles.homepage : ""}`}>
  <Container className={`px-4 ${styles.navContainer}`}> {/* <-- adds consistent padding */}
    <Navbar expand="lg" className={`${styles.nav} py-1 px-2`}>

      {/* Logo */}
      <Navbar.Brand href="/">
        <StaticImage
          placeholder="blurred"
          src="../../images/kehof-15-year-white.png"
          alt="KEHOF logo"
          style={{ maxWidth: "200px" }}
        />
      </Navbar.Brand>

      {/* Hamburger toggle for mobile */}
      <Navbar.Toggle aria-controls="main-navbar-nav" />

      {/* Collapsible nav section */}
      <Navbar.Collapse id="main-navbar-nav">
        <Nav as="ul" className="ms-auto">
          <Nav.Link as="li" className="mx-2">
            <a href="/media" className={styles.links}>Media</a>
          </Nav.Link>
          <Nav.Link as="li" className="mx-2">
            <a href="/book" className={styles.links}>Book</a>
          </Nav.Link>
          <Nav.Link as="li" className="mx-2">
            <a href="/founders-series" className={styles.links}>Founders Series</a>
          </Nav.Link>
          <Nav.Link as="li" className="mx-2">
            <a href="/fellowship" className={styles.links}>The Fellowship</a>
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
            <a href="/induction-dinner" className={styles.links}>Induction Dinner</a>
          </Nav.Link>
          <Nav.Link as="li" className="mx-2">
            <a href="#sponsors" className={styles.links}>Sponsors</a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
</Container>
    </>
  );
};

export default Header;

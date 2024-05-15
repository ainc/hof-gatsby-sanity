import { StaticImage } from 'gatsby-plugin-image';
import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as styles from './header.module.scss';
import { AiFillCaretDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
    <>
    {/*Header for large screens and wider */}
    <div className='d-none d-lg-block'>
        <div className={styles.alert}>
        <p>
        Nominations for 2024 class are open. Deadline is May 3, 2024. <a href="/nominate" style={{color: '#666'}}>Nominate here</a>.
        </p>
        </div>
        <Container fluid style={{background: '#af0a0a'}}>
            <div className={`${styles.socialBar}`} />
        </Container>
        <Navbar className={styles.header}>
            <Container>
                <Navbar.Brand href="/"><StaticImage placeholder='blurred' src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
                <Nav as='ul'>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Media</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Book</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Founders Series</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>The Fellowship</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Nominate</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Induction Dinner</a></Nav.Link>
                    <Nav.Link as='li'><a href="#" className={styles.links}>Sponsors</a></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>

    {/*Header for medium screens and smaller */}
    <div className='d-lg-none'>
      <Navbar collapseOnSelect expand="lg" variant="dark"  className={styles.header}>
        <Container>
          <Navbar.Brand href="#"><StaticImage placeholder='blurred' src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-white text-white'/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" as="ul">
              <Nav.Link href="/media" className={styles.links} as='li'>Media</Nav.Link>
              <Nav.Link href="/book" className={styles.links} as='li'>Book</Nav.Link>
              <Nav.Link href="/founders-series" className={styles.links} as='li'>Founders Series</Nav.Link>
              <Nav.Link href="/fellowship" className={styles.links} as='li'>The Fellowship</Nav.Link>
              <NavDropdown title="Nominate" id="collapsable-nav-dropdown" className={styles.dropdownMenu}>
                <NavDropdown.Item  className={styles.links} href="https://forms.zohopublic.com/virtualoffice9155/form/NominationKentuckyEntrepreneurHallofFame/formperma/RbkleuPk2I_uJqvvP0aAi2DrXVrfwso-QKVOWR6h_EI">
                  Hall of Fame
                </NavDropdown.Item>
                <NavDropdown.Item  className={styles.links} href="https://forms.zohopublic.com/virtualoffice9155/form/EmergingEntrepreneurNominationKentuckyEntrepreneur/formperma/WlfEONIkD_KdXHI5lfj9kXvZ8SUBgQTaC9bIf9AnGXk">
                  Emerging
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.links}  href="https://zfrmz.com/HiHnbru8T7pFNW1rTFpw">
                  Mentor
                </NavDropdown.Item>
                <NavDropdown.Item  className={styles.links} href="https://zfrmz.com/FcyrqHK54OYvk507ovTQ">
                  Investor
                </NavDropdown.Item>
                <NavDropdown.Item  className={styles.links} href="https://zfrmz.com/PcjCQ9fgz9mjukf8hpv3">
                  President/Executive
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/induction-dinner" className={styles.links} as='li'>Induction Dinner</Nav.Link>
              <Nav.Link href="/sponsors" className={styles.links} as='li'>Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
    )
}
export default Header;
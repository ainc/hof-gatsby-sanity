import { StaticImage } from 'gatsby-plugin-image';
import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as styles from './header.module.scss';

const Header = () => {
    return (
    <>
    <div className={styles.alert}>
      <p>
        Nominations for 2024 class are open. Deadline is May 3, 2024. <a href="/nominate" style={{color: '#666'}}>Nominate here</a>.
      </p>
    </div>
    {/*Header for large screens and wider */}
    <Container fluid className={`${styles.background} d-none d-lg-block`} >
        <Container>
            <div className={`${styles.socialBar}`} />
            <Navbar className={`${styles.nav} py-1 px-2`}>
              <Navbar.Brand href="/"><StaticImage placeholder='blurred' src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
              <Nav as='ul'>
                <Nav.Link as='li' className='mx-2'><a href="/media" className={styles.links}>Media</a></Nav.Link>
                <Nav.Link as='li' className='mx-2'><a href="/book" className={styles.links}>Book</a></Nav.Link>
                <Nav.Link as='li' className='mx-2'><a href="#" className={styles.links}>Founders Series</a></Nav.Link>
                <Nav.Link as='li' className='mx-2'><a href="#" className={styles.links}>The Fellowship</a></Nav.Link>
                <NavDropdown title={<span className={styles.links}>Nominate</span>} id="collapsable-nav-dropdown" className={styles.dropdownMenuLg}>
                  <NavDropdown.Item  className={styles.dropdownItems} href="https://forms.zohopublic.com/virtualoffice9155/form/NominationKentuckyEntrepreneurHallofFame/formperma/RbkleuPk2I_uJqvvP0aAi2DrXVrfwso-QKVOWR6h_EI">
                    Hall of Fame
                  </NavDropdown.Item>
                  <NavDropdown.Item  className={styles.dropdownItems} href="https://forms.zohopublic.com/virtualoffice9155/form/EmergingEntrepreneurNominationKentuckyEntrepreneur/formperma/WlfEONIkD_KdXHI5lfj9kXvZ8SUBgQTaC9bIf9AnGXk">
                    Emerging
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItems}  href="https://zfrmz.com/HiHnbru8T7pFNW1rTFpw">
                    Mentor
                  </NavDropdown.Item>
                  <NavDropdown.Item  className={styles.dropdownItems} href="https://zfrmz.com/FcyrqHK54OYvk507ovTQ">
                    Investor
                  </NavDropdown.Item>
                  <NavDropdown.Item  className={styles.dropdownItems} href="https://zfrmz.com/PcjCQ9fgz9mjukf8hpv3">
                    President/Executive
                  </NavDropdown.Item>
                </NavDropdown>                
                <Nav.Link as='li' className='mx-2'><a href="#" className={styles.links}>Induction Dinner</a></Nav.Link>
                <Nav.Link as='li' className='mx-2'><a href="#" className={styles.links}>Sponsors</a></Nav.Link>
              </Nav>
            </Navbar>
        </Container>
    </Container>

    {/*Header for medium screens and smaller */}
    <div className='d-lg-none'>
      <Navbar collapseOnSelect expand="lg" variant="dark"  className={styles.background}>
        <Container>
          <Navbar.Brand href="#"><StaticImage placeholder='blurred' src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-white text-white'/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" as="ul">
              <Nav.Link href="/media" className={styles.links} as='li'>Media</Nav.Link>
              <Nav.Link as='li'><a href="/book" className={styles.links}>Book</a></Nav.Link>
              <Nav.Link href="/founders-series" className={styles.links} as='li'>Founders Series</Nav.Link>
              <Nav.Link href="/fellowship" className={styles.links} as='li'>The Fellowship</Nav.Link>
              <NavDropdown title={<span className={styles.links}>Nominate</span>} id="collapsable-nav-dropdown" className={styles.dropdownMenu}>
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
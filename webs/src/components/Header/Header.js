import { StaticImage } from 'gatsby-plugin-image';
import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Navbar, Nav} from 'react-bootstrap';
import * as styles from './header.module.scss';

const Header = () => {
    return (
        <Navbar className={styles.header}>
            <Container className={styles.headerContainer}>
                <Navbar.Brand href="#"><StaticImage placeholder='blurred' src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
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
    )
}
export default Header;
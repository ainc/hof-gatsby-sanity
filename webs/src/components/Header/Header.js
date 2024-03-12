import { StaticImage } from 'gatsby-plugin-image';
import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Navbar, Nav} from 'react-bootstrap';
import * as styles from './header.module.scss';

const Header = () => {
    return (
        <Navbar className={styles.header}>
            <Navbar.Brand href="#"><StaticImage src='../../images/hof-logo.png' alt="KEHOF logo" style={{maxWidth: '80px'}} /></Navbar.Brand>
            <Nav as='ul' className={styles.nav}>
                <Nav.Link as='li' className='text-white' href="#">Media</Nav.Link>
                <Nav.Link as='li' className='text-white'>Book</Nav.Link>
                <Nav.Link as='li' className='text-white'>Founders Series</Nav.Link>
                <Nav.Link as='li' className='text-white'>The Fellowship</Nav.Link>
                <Nav.Link as='li' className='text-white'>Nominate</Nav.Link>
                <Nav.Link as='li' className='text-white'>Induction Dinner</Nav.Link>
                <Nav.Link as='li' className='text-white'>Sponsors</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Header;
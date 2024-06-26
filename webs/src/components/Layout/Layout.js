import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Navbar} from 'react-bootstrap'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/seo';
const Layout = ({ children }) => {
    return (
        <div>
            <SEO />
            <Header />
            <main style={{margin: '0', padding: '0'}}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
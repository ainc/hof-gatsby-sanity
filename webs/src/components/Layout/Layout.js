import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Navbar} from 'react-bootstrap'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
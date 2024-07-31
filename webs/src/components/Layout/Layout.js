import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/seo';
const Layout = ({ children }) => {
    return (
        <div>
            <SEO />
            <Header />
            <main style={{margin: '0', padding: '0', background: "#e6e6e6 url('../../images/body_bg.jpg') center repeat-y"}}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
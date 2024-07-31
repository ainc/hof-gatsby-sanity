import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/seo';
import * as styles from'./layout.scss';
const Layout = ({ children }) => {
    return (
        <div>
            <SEO />
            <Header />
            <main className={styles.background}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;

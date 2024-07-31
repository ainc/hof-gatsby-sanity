import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/seo';
import * as styles from './layout.module.scss'
const Layout = ({ children }) => {
    return (
        <div>
            <SEO />
            <Header />
            <main>
                <div className={styles.background}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
import React from 'react';
import Header from './header/header';
import Main from '../components/main';
import '../styles/layout.css';
import * as styles from './layout.module.css';
import Footer from '../components/footer/footer';
const Layout = ({ children, show, nav, showNav, siteTitle }) => (
  <React.Fragment>
    <Header siteTitle={siteTitle} show={show} nav={nav} showNav={showNav} />
    <div className={styles.page}>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;

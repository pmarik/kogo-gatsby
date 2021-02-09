import React, {useEffect} from 'react';
import PropTypes from "prop-types"
import Header from "../header/Header.component";
import Footer from '../footer/Footer.component';
import './layout.styles.scss';

const Layout = ({ children }) => {

  useEffect(() => {
    document.getElementsByTagName("html")[0].style = '';
  }, [])

  return ( 
    <>
      <Header />      
        <main className="main-content fadeIn" style={{opacity: 0}}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { Link } from 'gatsby'

import FooterForm from './FooterForm';
import './footer.styles.scss';

import logo from '../../img/kogoWhiteSimp.svg'
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import vimeo from '../../img/social/vimeo.svg'

const Footer = class extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="logo">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="footer-container">

              <div className="top-footer-section">

                  <FooterForm className="footer-form"/>

                  <div className="footer-social-links-container">
                    <p style={{textAlign: 'center'}}>Keep up with Kogo</p>
                    <div className="footer-social-links">
                      <a title="kogo foods facebook" href="https://www.facebook.com/Kogofoods">
                        <img
                          src={facebook}
                          alt="Kogo Foods Facebook"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                      {/* <a title="twitter" href="https://twitter.com">
                        <img
                          className="fas fa-lg"
                          src={twitter}
                          alt="Twitter"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a> */}
                      <a title="kogo foods instagram" href="https://www.instagram.com/kogofoods/">
                        <img
                          src={instagram}
                          alt="Kogo Foods Instagram"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                    
                    </div>
                </div>
              </div>
              
              <div className="footer-menu-copyright-container">
                <section className="footer-menu">
                  <ul className="footer-menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/shop">
                        Products
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>

                <div className="copyright">
                  <span>
                    <Link to="/terms-of-service">Terms of Service </Link>
                    |
                    <Link to="/privacy-policy"> Privacy Policy</Link> 
                  </span>
                  
                  <span>© 2021 KOGO</span>
                 
                </div>
              </div>
        </div>
      </footer>
    )
  }
}

export default Footer

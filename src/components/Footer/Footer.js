import React from 'react'
import { Link } from 'gatsby'

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
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="footer-container">

              <div className="top-footer-section">
                  <div className="footer-form" style={{width: '200px', height: '100px', border: '1px solid black'}}>
                    <p>Sign up to our Newsletter -form section</p>
                  </div>


                  <div className="footer-social-links-container">
                    <p style={{textAlign: 'center'}}>Keep up with Kogo</p>
                    <div className="footer-social-links">
                      <a title="facebook" href="https://facebook.com">
                        <img
                          src={facebook}
                          alt="Facebook"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                      <a title="twitter" href="https://twitter.com">
                        <img
                          className="fas fa-lg"
                          src={twitter}
                          alt="Twitter"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                      <a title="instagram" href="https://instagram.com">
                        <img
                          src={instagram}
                          alt="Instagram"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                      <a title="vimeo" href="https://vimeo.com">
                        <img
                          src={vimeo}
                          alt="Vimeo"
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
                      <Link className="navbar-item" to="/products">
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

                <div className="copyright">© KOGO 2020</div>
              </div>
        </div>
      </footer>
    )
  }
}

export default Footer

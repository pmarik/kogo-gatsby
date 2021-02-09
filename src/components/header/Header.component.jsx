import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types"
import './header.styles.scss';
import { Link } from "gatsby"
import { useCartCount } from "gatsby-theme-shopify-manager"
import logo from '../../images/kogoWhiteSimp.svg';


const Header = () => {
  const count = useCartCount()
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [delayedDisplay, setDelayedDisplay] = useState('delayedDisplayHide')

  useEffect(() => {
    active ?
      setNavBarActiveClass('is-active')
      : setNavBarActiveClass('is-closed')

    if (active){
      setDelayedDisplay('')
    } else {
      setTimeout(() => {setDelayedDisplay('delayedDisplayHide')}, 500)
    }
  }, [active])


  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(prevState => (!prevState));
  }

  return (
    <>
      <header className="header">
        <nav className="navbar is-transparent">
        <div className="container-nav">
          {/* Hamburger menu */}
          <div
                role='button'
                className={`menu-toggle ${navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => toggleHamburger()}
              >
               <div className="hamburger"></div>
          </div>
          
          <div
              id="navMenu"
              className={` ${navBarActiveClass}`}
            >
              <div className={`navbar-links ${delayedDisplay}`}>

                <Link className="navbar-item-link" to="/" activeClassName="active">
                  <span className="nav-text">Home</span>
                </Link>

                <Link className="navbar-item-link" to="/about" activeClassName="active">
                  <span className="nav-text">About</span>
                </Link>

                <Link className="navbar-item-link" to="/" activeClassName="active" getProps={({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "navbar-item-link active" } : null } >
                  <span className="nav-text">Blog</span>
                </Link>

                <Link className="navbar-item-link" to="/shop" activeClassName="active" getProps={({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "navbar-item-link active" } : null } >
                  <span className="nav-text">Shop</span>
                </Link>

                <Link className="navbar-item-link hide-link" to="/contact" activeClassName="active">
                  <span className="nav-text">Contact</span>
                </Link>

                <Link className="navbar-item-link hide-link" to="/cart" activeClassName="active">
                  <span className="nav-text">Your Cart</span>
                </Link>

              </div>
          </div>

          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Kogo">
              <img src={logo} className="logo" alt="Kogo" style={{width: '120px' }}/>
            </Link>
          </div>

          <div className="nav-cart">
            <Link to="/cart/" className="cart-wrap">
              <span className="cart-text nav-size" style={{color: '#5F6E7D'}}>cart</span>
              <span className="cart">
                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.23652 26.8952C0.636353 26.6895 0.121906 26.101 0.00404277 25.4853C-0.0405526 25.2523 0.286131 22.3009 0.868452 17.6759C0.933528 17.1591 1.2196 14.8142 1.50415 12.4652C1.78871 10.1161 2.06928 8.08627 2.12763 7.95442C2.28501 7.59882 2.6326 7.24079 3.00218 7.05358C3.30855 6.8984 3.45995 6.88531 5.35422 6.85014L7.37881 6.81255L7.42259 5.94799C7.46602 3.78492 7.46813 3.76339 7.69088 3.20554C8.28655 1.71376 9.43204 0.678074 11.0707 0.149693C11.6897 -0.0498978 13.31 -0.0498978 13.929 0.149693C15.5676 0.678074 16.7131 1.71376 17.3088 3.20554C17.5316 3.76339 17.5337 3.78492 17.5771 5.94799L17.6209 6.81255L19.6455 6.85014C21.5397 6.8853 21.6911 6.8984 21.9975 7.05358C22.3672 7.24083 22.7147 7.59883 22.8722 7.95466C22.9306 8.08663 23.2655 10.5563 23.6165 13.4427C23.9675 16.3292 24.4331 20.1583 24.6512 21.9519C24.8885 23.9035 25.0268 25.3223 24.9956 25.4853C24.8733 26.1242 24.319 26.7369 23.7059 26.9108C23.2526 27.0394 1.6135 27.0243 1.23652 26.8951V26.8952ZM23.458 25.832C23.7519 25.6882 23.8534 25.5074 23.8534 25.1282C23.8534 24.9626 23.6577 23.2096 23.4185 21.2327C23.1793 19.2558 22.7511 15.71 22.467 13.3531C21.8792 8.47682 21.8878 8.53694 21.7396 8.26263C21.5656 7.94068 21.2285 7.89247 19.3279 7.91763L17.6209 7.94022L17.598 8.50436L17.5752 9.06849L17.8928 9.39103C18.3805 9.88627 18.4247 10.5134 18.0052 10.9855C17.4377 11.624 16.5078 11.5848 15.972 10.8996C15.616 10.4444 15.752 9.69334 16.2667 9.27243C16.4641 9.11098 16.4749 9.06745 16.4531 8.52064L16.4299 7.94022H12.4998H8.56974L8.54659 8.52064C8.5248 9.06745 8.53557 9.11098 8.73299 9.27243C9.24765 9.69334 9.38368 10.4444 9.0277 10.8996C8.49182 11.5848 7.56192 11.624 6.99444 10.9855C6.57493 10.5134 6.61914 9.88627 7.10685 9.39103L7.42448 9.06849L7.40163 8.50436L7.37879 7.94022L5.67178 7.91763C3.73733 7.89203 3.43637 7.93766 3.24636 8.28558C3.15996 8.44379 2.8239 10.9727 2.1353 16.6463C1.59234 21.12 1.14768 24.9263 1.14717 25.1048C1.14679 25.2832 1.18284 25.494 1.22762 25.5732C1.44394 25.956 0.937244 25.9393 12.4839 25.9426C21.9142 25.9451 23.2545 25.9317 23.458 25.832H23.458ZM16.4512 6.3296C16.5407 4.30259 16.4262 3.92606 16.0339 3.14318C15.4942 2.06647 14.3425 1.26714 13.0598 1.07914C11.0351 0.782389 8.99503 2.16643 8.61065 4.09757C8.52164 4.5448 8.49824 6.71979 8.58372 6.80072C8.61324 6.82868 10.3907 6.84277 12.5337 6.83205L16.4299 6.81255L16.4512 6.3296Z" fill="#5F6E7D"/>
                </svg>
                <span style={{fontSize: '0.8rem'}}>{count < 100 ? count : '+'}</span>
              </span>
            </Link>    
          </div> 

          </div> 
        </nav>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
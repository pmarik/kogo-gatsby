import React from 'react'
import { Link } from 'gatsby'
import cart from '../../img/cartWhite.svg';
import logo from '../../img/kogoWhiteSimp.svg'
import './navbar.styles.scss';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: 'is-closed',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container-nav">
          {/* Hamburger menu */}
          <div
                role='button'
                className={`menu-toggle ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
               <div className="hamburger"></div>
          </div>

          <div
              id="navMenu"
              className={` ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-links">

                <Link className="navbar-item-link" to="/" activeClassName="active">
                  <span className="nav-text">Home</span>
                </Link>

                <Link className="navbar-item-link" to="/about" activeClassName="active">
                  <span className="nav-text">About</span>
                </Link>

                <Link className="navbar-item-link" to="/blog" activeClassName="active">
                  <span className="nav-text">Blog</span>
                </Link>

                <Link className="navbar-item-link" to="/products" activeClassName="active">
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
                <img src={logo} alt="Kogo" style={{ width: '120px' }} />
              </Link>
            </div>

            <div className="nav-cart">
                <Link className="navbar-item nav-your-cart" to="/cart">
                  <span className="icon">
                    <img src={cart} alt="Cart" />
                    <span className="your-cart-text">Your Cart</span>
                  </span>
                </Link>
            </div>
      
        </div>
      </nav>
    )
  }
}

export default Navbar

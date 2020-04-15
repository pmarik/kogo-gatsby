import React from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import "./cart.styles.scss";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
 
  render() {
    return (
      <Layout>
        <main className="main-content">
          <section className="main-content-container anim-start-0 fadeIn">
            <div className="cart-main">
                <h1 className="cart-title">Your Cart</h1>

                <div>
                   <p>Your cart is currently empty, please <Link to="/products" className="continue-shop-link">continue shopping</Link></p>
                </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

import React from 'react'
import Helmet from 'react-helmet';
import Layout from '../../components/Layout'
import ProductRoll from '../../components/ProductRoll/ProductRoll'

export default class StoreIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main className="main-content">
        <Helmet title={`Shop | KOGO | Organic Ground Coffee Cherries`} />
          <div className="main-content-container anim-start-0 fadeIn">
            <h1
              style={{marginBottom: '5%', lineHeight: '1'}}
            >
              Products
            </h1>
          
            <section >
              <div className="container">
                <div>
                  <ProductRoll />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    )
  }
}

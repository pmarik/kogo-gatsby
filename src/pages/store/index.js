import React from 'react'

import Layout from '../../components/Layout'
import ProductRoll from '../../components/ProductRoll/ProductRoll'

export default class StoreIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main className="main-content">
          <div className="main-content-container anim-start-0 fadeIn">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{marginBottom: '5%', lineHeight: '1'}}
            >
              Products
            </h1>
          
            <section >
              <div className="container">
                <div className="content">
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

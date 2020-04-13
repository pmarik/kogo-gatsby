import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main className="main-content">
          <div className="main-content-container anim-start-0 fadeIn">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{marginBottom: '3%'}}
            >
              Latest Stories
            </h1>
          
            <section >
              <div className="container">
                <div className="content">
                  <BlogRoll />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    )
  }
}

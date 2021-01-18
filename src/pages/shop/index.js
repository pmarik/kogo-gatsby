import React from 'react'
import Helmet from 'react-helmet';
import Layout from '../../components/Layout'
import UnavailableForm from '../../components/UnavailableForm/UnavailableForm';


export default class StoreIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main className="main-content">
        <Helmet title={`Shop | KOGO | Organic Ground Coffee Cherries`} />
          <div className="main-content-container anim-start-0 fadeIn" style={{minHeight: '20vh'}}>
            <h1
              style={{marginBottom: '5%', lineHeight: '1'}}
            >
              Coming soon...
            </h1>

            <UnavailableForm  title={"Kogo"}/>

          
            <section >
              <div className="container">
                <div>
                  {/* <ProductRoll /> */}
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    )
  }
}

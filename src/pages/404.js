import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div className="main-content">
      <div className="main-content-container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '40vh'}} >
        <h1>Oops!</h1>
        <p>Unfortunatley, the page you are looking for could not be found. Please return to the <Link to="/" style={{color: '#FB604E'}}>Home Page</Link>, check out our <Link to="/shop" style={{color: '#FB604E'}}>products</Link>, or <Link to="/contact" style={{color: '#FB604E'}}>contact us.</Link></p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>Please return back to the <Link to="/">Home Page</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage

import React from 'react';
import { Link } from 'gatsby';
import SEO from "../components/Seo.component"
import Layout from '../components/layout/Layout.component'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{textAlign: 'center', marginTop: '4rem'}}>
      <h1>Something got tangled...</h1>
      <p style={{maxWidth: '60ch', margin: '0 auto'}}>Whoops! We could not find the page you were looking for. Go to our <Link to="/" className="accent" style={{textDecoration: 'underline'}}>homepage</Link> to get untangled, or <Link to="/contact" className="accent" style={{textDecoration: 'underline'}}>let us know</Link> about this error! </p>
    </section>
  </Layout>
)

export default NotFoundPage;

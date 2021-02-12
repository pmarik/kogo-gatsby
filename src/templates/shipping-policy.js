import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout.component'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/Seo.component';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';
import './policy.styles.scss';


export const ShippingPolicyTemplate = ({ 
  title, 
  content, 
  contentComponent,
 }) => {
  const PageContent = contentComponent || Content

  const description = "Kogo shipping policy" 

  return (
    <section className="section section--gradient" style={{paddingTop: '5%'}}>
      <SEO 
        title="About" 
        description={description} 
        thumbnailImage="/img/ogKogoAbout.jpg" 
        addedKeywords="shipping policy"
        url="https://www.kogofoods.com/shipping-policy/"
      />
      <Breadcrumbs links={[`shipping-policy`]} className="breadcrumb-alt"/>
      <h1><span>{title}</span></h1>
      <PageContent className={`content shipping-title`} content={content} />
    </section>
  )
}

ShippingPolicyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ShippingPolicy = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ShippingPolicyTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ShippingPolicy.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShippingPolicy

export const shippingPolicyQuery = graphql`
  query shippingPolicy($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

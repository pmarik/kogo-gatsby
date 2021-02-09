import React from 'react';
import { graphql } from "gatsby"
import SEO from '../components/Seo.component'
import Layout from '../components/layout/Layout.component';
import './policy.styles.scss';

const PolicyPage = ({ data: { shopifyShopPolicy: policy } }) => {

    const description = `Learn more about Applecore's ${policy.title}.`

    return (
        <Layout>
            <SEO 
              title={policy.title} 
              description={description}
              url={`https://www.myapplecore.com/${policy.handle}/`}
            />
            <section className="policy-page">
                <h1>{policy.title}</h1>
                <p dangerouslySetInnerHTML={{__html: policy.body}}></p>
            </section>
        </Layout>
    )
}

export default PolicyPage;

export const PolicyPageQuery = graphql`
  query policyPage($policyId: String!) {
    shopifyShopPolicy(id: { eq: $policyId }) {
      id
      title
      body
      handle
    }
  }
`

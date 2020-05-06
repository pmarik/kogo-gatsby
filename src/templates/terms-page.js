import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import './privacy-policy.styles.scss';

export const TermsTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <main className="main-content">
      {helmet || ''}
      <section className="main-content-container  anim-start-0 fadeIn">
        
          <div className="privacy-page">
            <h1 className="title">
              {title}
            </h1>
            <div className="privacy-page-body">
              <PostContent content={content} />
            </div>
          </div>
        
      </section>
    </main>
  )
}

TermsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Terms = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TermsTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="Terms of Service | KOGO | Organic Ground Coffee Cherries">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Terms.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Terms

export const pageQuery = graphql`
  query termsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

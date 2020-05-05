import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import "./tags.styles.scss";

const _ = require('lodash');

class TagRoute extends React.Component {

  
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = _.kebabCase(this.props.pageContext.tag)
    const title = this.props.data.site.siteMetadata.title

    const myTags = posts.filter(item => {
      let temp = false;
      if (item.node.frontmatter.tags !== null){
        item.node.frontmatter.tags.forEach(v => {
          if (v.toLowerCase() === tag){
            temp = true;
          }
        })
        return temp
      } else {
        return false
      }
    })

  const tagHeader = `${myTags.length} post${
      myTags.length === 1 ? '' : 's'
    } tagged with “${tag}”`

    const postLinks = myTags.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="tag-link">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))

    return (
      <Layout>
        <section className="main-content">
          <Helmet title={`"${tag.toUpperCase()}" | ${title}`} />
          <div className="main-content-container  anim-start-0 fadeIn">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist tag-link">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`

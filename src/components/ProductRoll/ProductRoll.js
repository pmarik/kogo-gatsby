import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './productroll.styles.scss';
import VisibilitySensor from '../VisibilitySensor';


class ProductRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog-roll-wrapper">
        {posts &&
          posts.map(({ node: post }) => (
            <VisibilitySensor 
              once
              partialVisibility
              minTopValue="25"
            > 
              {({ isVisible }) => (
                <div className={`blog-preview-wrap anim-start-0 ${isVisible ? 'fadeIn' : ''} `} key={post.id}>
                  <article
                    className={`blog-list-item is-child notification blog-article-list ${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                  >
                    <header className="blog-header">
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span className="subtitle is-size-6 is-block">
                          {post.frontmatter.price}
                        </span>
                      </p>
                    </header>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              )}
            </VisibilitySensor>
          ))}
      </div>
    )
  }
}

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                price
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductRoll data={data} count={count} />}
  />
)

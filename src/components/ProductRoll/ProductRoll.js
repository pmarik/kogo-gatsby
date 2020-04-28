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
      <div className="product-roll-wrapper">
        {posts &&
          posts.map(({ node: post }) => (
            <VisibilitySensor 
              once
              partialVisibility
              minTopValue="25"
              key={post.id}
            > 
              {({ isVisible }) => (
                <div className={`product-preview-wrap anim-start-0 ${isVisible ? 'fadeIn' : ''} `} >
                  <div
                    className={`blog-list-item is-child  product-list ${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                  >

               
                
                    {post.frontmatter.featuredimage ? (
                        <Link to={post.fields.slug} className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      ) : null}

                    <header className="product-header">
                      <p className="post-meta">
                        <Link
                          className="product-title is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        
                        <span className="product-price">
                          {post.frontmatter.price}
                        </span>
                      </p>
                    </header>
                  
                    <br/>
                  </div>
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
                    fluid(maxWidth: 250, quality: 100) {
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

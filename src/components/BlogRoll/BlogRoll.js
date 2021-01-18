import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './blogroll.styles.scss';
import VisibilitySensor from '../VisibilitySensor';


class BlogRoll extends React.Component {
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
              key={post.id}
            > 
              {({ isVisible }) => (
                <div className={`blog-preview-wrap anim-start-0 ${isVisible ? 'fadeIn' : ''} `} >
                  <article
                    className={`blog-list-item is-child blog-article-list ${
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
                          className="blog-title"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        
                      </p>
                    </header>
                    <p>
                      {post.excerptAst.children[2].children[0].value}
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerptAst(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredpost
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

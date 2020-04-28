import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Pricing from '../components/Pricing/Pricing';
import ProductImages from '../components/ProductImages/ProductImages';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import UnavailableForm from '../components/UnavailableForm/UnavailableForm';

import './product-post.styles.scss';

export const ProductTemplate = ({
  content,
  contentComponent,
  description,
  availability,
  tags,
  title,
  helmet,
  pricing,
  images,
  testimonials,
  main,
  fullImage,
  blurbs,
  featuredImage
}) => {
  const PostContent = contentComponent || Content

  return (
    <main className="main-content">
      {helmet || ''}
      <section className="main-content-container  anim-start-0 fadeIn">
        
          <div className="product-post">
            <section className="product-post-grid">
              <h1 className="title ">
                {title}
              </h1>

              <div className="product-img-component">
                <ProductImages images={images} />
              </div>

              <p className="product-post-description">{description}</p>

              {availability.available ? (
                <Pricing data={pricing} itemName={title} featuredImage={featuredImage}/>
              ) : (
                <UnavailableForm unavailableText={availability.unavailableText} title={title}/>
              )}
              

            </section>
             
            <div>
              <Features gridItems={blurbs} />

              <div className="testimonials">
                <h2>See what others are saying</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>

            <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      fullImage.childImageSharp
                        ? fullImage.childImageSharp.fluid.src
                        : fullImage
                    })`,
                  }}
                />
            
            <div className="product-extra-info">
                
                <h3 className="has-text-weight-semibold is-size-3">
                  {main.heading}
                </h3>
                <p>{main.description}</p>
              
            </div>


            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image1} />
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image2} />
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image3} />
                  </article>
                </div>
              </div>
            </div>

            <div className="product-post-body">
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags:</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`} className='tag-link'>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        
      </section>
    </main>
  )
}

ProductTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  availability: PropTypes.shape({
    available: PropTypes.bool,
    unavailableText: PropTypes.string
  }),
  title: PropTypes.string,
  helmet: PropTypes.object,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  images: PropTypes.array,
  testimonials: PropTypes.array,
  blurbs: PropTypes.array,
}

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        availability={post.frontmatter.availability}
        images={post.frontmatter.images}
        pricing={post.frontmatter.pricing}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        testimonials={post.frontmatter.testimonials}
        main={post.frontmatter.main}
        fullImage={post.frontmatter.full_image}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        blurbs={post.frontmatter.blurbs}
        featuredImage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        availability {
          available
          unavailableText
        }
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 675, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        pricing {
          heading
          description
          options {
            description
            items
            option
            price
            id
          }
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testimonials {
          author
          quote
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        tags
      }
    }
  }
`

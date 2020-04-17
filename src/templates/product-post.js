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
import './product-post.styles.scss';

export const ProductTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  pricing,
  images,
  testimonials,
  blurbs
}) => {
  const PostContent = contentComponent || Content

  return (
    <main className="main-content">
      {helmet || ''}
      <section className="main-content-container  anim-start-0 fadeIn">
        
          <div className="product-post">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div>

              <div className="product-img-component">
                <ProductImages images={images} />
              </div>

              <p>{description}</p>

              <Pricing data={pricing} />

              <div className="testimonials">
                <h2>See what others are saying</h2>
                <Testimonials testimonials={testimonials} />
              </div>

              <Features gridItems={blurbs} />
            </div>

            <div className="blog-post-body">
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
  title: PropTypes.string,
  helmet: PropTypes.object,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array,
  }),
  images: PropTypes.array,
  testimonials: PropTypes.array,
}

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        blurbs={post.frontmatter.blurbs}
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
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
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
          }
        }
        testimonials {
          author
          quote
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

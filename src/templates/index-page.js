import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import './index-page.styles.scss';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  image_2,
 
}) => (
  <div>
    <div className="full-width-image top-banner container-custom">
      <div className="top-banner-container">
        <div className="top-banner-text-container">
          <h1
            className="top-banner-tagline">
            {heading}
          </h1>
          <div className="subheading-link" >
            <Link to="/products">
              {subheading}
            </Link>
          </div>
        </div>

        <div className="top-banner-image">
          <PreviewCompatibleImage  
                imageInfo={{
                  image: image,
                  alt: title,
                }}
              />
        </div>
          
      </div>
    </div>
    <section className="section-home-container ">
      <div className="container-section">
              <div className="content">
            
                <div class="mid-section">
                  <div className="left-mid-section">
                    <div className="content">
                      <div className="tile">
                        <h2 className="title">{mainpitch.title}</h2>
                      </div>
                      <div className="tile">
                        <p className="subtitle">{mainpitch.description}</p>
                      </div>
                    </div>

                    <div className="content">
                      <div className="tile">
                        <h2 className="title">{mainpitch.title_2}</h2>
                      </div>
                      <div className="tile">
                        <p className="subtitle">{mainpitch.description_2}</p>
                      </div>
                    </div>

                    <button>
                      <Link to="/products">
                        {mainpitch.button_text}
                      </Link>
                    </button>
                   
                  </div>

                  <div className="mid-section-img">
                    <PreviewCompatibleImage imageInfo={mainpitch.image1} />
                  </div>
                </div>
               
                <div className="column is-12">
                  <h3 className="blog-roll-title">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more from the blog
                    </Link>
                  </div>
                </div>
              </div>
           
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          title_2
          description_2
          button_text
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
        }
        intro {
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
          heading
          description
        }
      }
    }
  }
`

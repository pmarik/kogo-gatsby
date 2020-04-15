import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import VisibilitySensor from '../components/VisibilitySensor';

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import CoffeeStem from '../components/SVGstems/CoffeeStem';

import './index-page.styles.scss';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  button_text_1,
  mainpitch,
  bottom_page_content,
}) =>  {

  
  return(
  <main className="main-content">
    <div className="main-content-container anim-start-0 fadeIn">
      
        <section className="top-banner-grid">

          <div className="landing-heading" 
               data-sal="fade-in"
               data-sal-delay="300"
               data-sal-easing="ease">
            <h1>{heading}</h1>
          </div>
          
          <div className="top-banner-image">
            <PreviewCompatibleImage 
                imageInfo={{
                    image: image,
                    alt: title,
                  }}
            />
          </div>
          

          <div className="landing-subheading" >
              <h3>{subheading}</h3>
          </div>

          <button className="landing-btn">
            <Link to="/products">
              {button_text_1}
            </Link>
          </button>

          <CoffeeStem />
        </section>

        <section className="section-home-container">
          <div className="content">
              <div className="mid-section-grid">

                <VisibilitySensor 
                  once
                  partialVisibility
                  minTopValue="25"
                > 
                  {({ isVisible }) => (
                      <div className={`content content-1 anim-start-0 ${isVisible ? "fadeInLeft" : ''}`}>
                          <div className="tile">
                            <h2 className="title">{mainpitch.title}</h2>
                          </div>
                          <div className="tile">
                            <p className="subtitle">{mainpitch.description}</p>
                          </div>
                      </div>
                    )}
                  </VisibilitySensor>

                        <div className="mid-section-img">
                          <PreviewCompatibleImage imageInfo={mainpitch.image1} />
                        </div>
                    

                  <div className="content content-2">
                        <VisibilitySensor 
                            once
                            partialVisibility
                            minTopValue="25"
                        > 
                          {({ isVisible }) => (
                            <div className={`anim-start-0 ${isVisible ? 'fadeInLeft' : ''}`}>
                              <div className="tile">
                                <h2 className="title">{mainpitch.title_2}</h2>
                              </div>
                              <div className="tile">
                                <p className="subtitle">{mainpitch.description_2}</p>
                              </div>
                            </div>
                        )}
                      </VisibilitySensor>

                      <button>
                        <Link to="/about">
                          {mainpitch.button_text_2}
                        </Link>
                      </button>
                  </div>
              </div>
                  
              <div className="blog-preview-list">
                  <h3 className="blog-roll-title">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="blog-link">
                    <Link className="btn" to="/blog">
                      Read more from the blog
                    </Link>
                  </div>
              </div>

              <section className="bottom-content">
                  <div className="bottom-section-img">
                        <h2 className="bottom-section-header">{bottom_page_content.heading}</h2>
                        <PreviewCompatibleImage  
                          imageInfo={{
                            image: bottom_page_content.image1.image,
                            alt: bottom_page_content.image1.alt,
                          }}
                        />
                  </div>

                  <div className="bottom-section-description">
                    <p>{bottom_page_content.description}</p>
                  </div>

              </section>

          </div>               
        </section>
    </div>
  </main>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  button_text_1: PropTypes.string,
  mainpitch: PropTypes.object,
  bottom_page_content: PropTypes.object,
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
        button_text_1={frontmatter.button_text_1}
        mainpitch={frontmatter.mainpitch}
        bottom_page_content={frontmatter.bottom_page_content}
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
        button_text_1
        mainpitch {
          title
          description
          title_2
          description_2
          button_text_2
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
        bottom_page_content {
          image1{
            alt
            image{
              childImageSharp{
                fluid(maxWidth: 1024, quality: 95){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          heading
          description
        }
      }
    }
  }
`

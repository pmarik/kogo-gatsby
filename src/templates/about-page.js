import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout.component'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/Seo.component';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';
import './about-page.styles.scss';



export const AboutPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
  aboutImage,
 }) => {
  const PageContent = contentComponent || Content

  const description = "Learn about the story behind the best wire management tool and how Applecore's simple design came to be." 

  return (
    <section className="section section--gradient" style={{paddingTop: '5%'}}>
      <SEO 
        title="About" 
        description={description} 
        thumbnailImage="/img/ogApplecoreAbout.png" 
        addedKeywords="about applecore" 
        url="https://www.myapplecore.com/about/"
      />
      <Breadcrumbs links={[`about`]} className="breadcrumb-alt"/>
      <h1 className="about-title about-content"><span>{title}</span></h1>
      <PageContent className={`content about-content`} content={content} />
      <div className="about-img">
          <PreviewCompatibleImage 
              imageInfo={{
                  image: aboutImage,
                  alt: 'Applecore wire wrap process',
                }}
          />
      </div>
      
      <div className="about-content">
        <h2>Misson and Vision</h2>
        <p>KOGO was founded with the purpose of iproving the lives of small scale farmers in developing countries, improving the environment, and improving the health of people around the globe in a sustainable manner.</p>
        <p>Through upycling a waste stream, KOGO reduces green house gas emissions and has a positie economic impact on small communities in developing countries. KOGO strives to provide consumers with a product that improves brain function, bodily health, and energy. Using sustainable direct trade sourcing methods, KOGO stands on the front line of superfoods as a product that is super-good for everyone involved.</p>
      </div>
    
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        aboutImage={post.frontmatter.aboutImage}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        aboutImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 80) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

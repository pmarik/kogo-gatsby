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
      <h1 className="about-title"><span>{title}</span></h1>
      <PageContent className={`content about-content`} content={content} />
      <div className="about-img">
          <PreviewCompatibleImage 
              imageInfo={{
                  image: aboutImage,
                  alt: 'Applecore wire wrap process',
                }}
          />
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

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import './about-page.styles.scss';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';



export const AboutPageTemplate = ({ title, title2, missionContent, midImage, storyContent, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <main className="main-content">
      <div className="main-content-container anim-start-0 fadeIn">
              

              <section className="about-story">
                <h2 className="title about-title has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <div>
                  <PageContent className="content" content={storyContent} />
                </div>

                  <PreviewCompatibleImage 
                  imageInfo={{
                      image: midImage,
                      alt: title,
                    }}
                  />
              </section>


              <section className="about-mission">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title2}
                </h2>
                <div>
                  {missionContent}
                </div>
                <PageContent className="content" content={content} />
              </section>

      </div>
    </main>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  console.log('from about-page ', post.frontmatter.about_section_1.content)


  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.about_section_1.title}
        storyContent={post.frontmatter.about_section_1.content}
        midImage={post.frontmatter.mid_image}
        title2={post.frontmatter.about_section_2.title}
        missionContent={post.frontmatter.about_section_2.content}
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
  query aboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        about_section_1 {
          title
          content
        }
        mid_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about_section_2 {
          title
          content
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import './about-page.styles.scss';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';



export const AboutPageTemplate = ({ title, title2, missionContent, midImage, storyContent, contentComponent }) => {
  const PageContent = contentComponent || Content

  storyContent = remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(storyContent).toString();

  missionContent = remark()
                    .use(recommended)
                    .use(remarkHtml)
                    .processSync(missionContent).toString();

  return (
    <main className="main-content">
      <div className="main-content-container anim-start-0 fadeIn">
              

              <section className="about-story">
                <div className="top-about-nav-container">
                  <h2 className="about-title has-text-weight-bold is-bold-light">
                    {title}
                  </h2>

                  <a href="#mission" className="mission-page-scroll">view mission</a>
                </div>
                
                <div className="article-padding">
                  <PageContent className="content" content={storyContent} />
                </div>

                <div className="about-mid-img">
                  <PreviewCompatibleImage 
                  imageInfo={{
                      image: midImage,
                      alt: title,
                    }}
                  />
                </div>

              </section>


              <section id="mission" className="about-mission">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title2}
                </h2>
                <div>
                  <PageContent className="content" content={missionContent} />
                </div>
              </section>

      </div>
    </main>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.about_section_1.title}
        storyContent={post.frontmatter.about_section_1.content}
        midImage={post.frontmatter.mid_image}
        title2={post.frontmatter.about_section_2.title}
        missionContent={post.frontmatter.about_section_2.content}
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

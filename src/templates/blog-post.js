import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/Seo.component'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout.component'
import Content, { HTMLContent } from '../components/Content'
import './blog-post.styles.scss';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  ogdescription,
  title,

}) => {
  const PostContent = contentComponent || Content

  let coverImg
  switch(title){
    case "The Birth of Kogo":
      coverImg = "/img/ogKogoBlogNewNormal.jpg"
      break;
    case "The New Normal":
      coverImg = "/img/ogKogoBlogBirth.jpg"
      break;
    default:
      coverImg = undefined;
      break;
  }

  return (
    <main className="main-content">
       <SEO 
           title={`${title} | Blog`}
           description={ogdescription} 
           thumbnailImage={coverImg}
           addedKeywords={`blog, ${title}`}
           url={`https://www.kogofoods.com/blog/`}
         />

      <section className="main-content-container  anim-start-0 fadeIn">
        
          <div className="blog-post">
            <h1 className="title">
              {title}
            </h1>
            <p>{description}</p>
            <div className="blog-post-body">
              <PostContent content={content} />
            </div>
          </div>
        
      </section>
    </main>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        ogdescription={post.frontmatter.ogdescription}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        ogdescription
      }
    }
  }
`
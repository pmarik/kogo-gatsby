import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image';
import { Button } from '../components/buttons/Button.component';
import Layout from '../components/layout/Layout.component'
import SEO from '../components/Seo.component';
import './contact-page.styles.scss';
import axios from 'axios'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';


export const ContactPageTemplate = ({ 
  title,
  contactText,
  contactImg,
 }) => {

  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const encode = data => {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    //const form = formRef.current;

    const axiosOptions = {
      url: window.location.href,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: encode({
        "form-name": formRef.current.getAttribute("name"),
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      })
    }
      
    axios(axiosOptions)
      .then(response => {
          console.log({response})
          setFeedbackMsg("Form submitted successfully!");
          formRef.current.reset()
      })
      .catch(err => {
          setFeedbackMsg("Form could not be submitted. Please refresh and try again.");
          console.log(err)
      })
  }

  const description = "Contact Applecore with questions or concerns."

  return (
    <section style={{paddingTop: '5%'}}>
      <SEO 
        title="Contact" 
        description={description} 
        thumbnailImage="/img/ogApplecoreContact.png" 
        addedKeywords="contact applecore"
        url="https://www.myapplecore.com/contact/"
      />
      <Breadcrumbs links={[`contact`]} className="breadcrumb-alt"/>

      <div className="form-img-flex">
          <div className="contact-container">
              <h1 style={{color: '#fff', marginTop: '1em'}}><span className={`brush-fit-mid`}>{title}</span></h1>
              <p>{contactText} <Link to={`/wholesale/`} className="accent" style={{textDecoration: 'underline'}}>bulk orders page</Link>.</p>

              <form ref={formRef} name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => handleSubmit(event)}>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <div hidden style={{display: 'none'}}>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" /> 
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your Name
                    </label>
                    <div className="control">
                      <input
                        ref={nameRef}
                        className="input"
                        type={'text'}
                        name={'name'}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        ref={emailRef}
                        className="input"
                        type={'email'}
                        name={'email'}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        ref={messageRef}
                        className="textarea"
                        name={'message'}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <Button
                      type={`submit`}
                      >
                      <span>Send Message</span>
                    </Button>
                  </div>

                  {feedbackMsg && <p style={{color: '#FB604E !important', marginTop: '1.5em', textAlign: 'right'}}>{feedbackMsg}</p>}

              </form>
          </div> 
          <div className="form-img-wrap contact-img">
            <Img className="form-img" fluid={contactImg.childImageSharp.fluid} alt={`Applecore Colors Contact Image`}/> 
          </div>
      </div>
    
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        title={post.frontmatter.title}
        contactText={post.frontmatter.contactText}
        contactImg={post.frontmatter.contactImg}
      />
    </Layout>
  )
}


ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        contactText
        contactImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

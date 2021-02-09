import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout.component'
import SEO from '../components/Seo.component';
import axios from 'axios'
import { Button } from '../components/buttons/Button.component';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';
import "./shop-page.styles.scss";

export const WholesalePageTemplate = ({ 
    title,
    subheading,
    bulkContactTitle,
    wholesaleText,
    businessText,
    bulkImg
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

  const description = "Contact Applecore with business inquiries about wholesale orders. Get setup with the full Applecore brand experience and carry the best wire organizer in your store."

    return (
        <section>
            <SEO 
              title="Wholesale" 
              description={description} 
              thumbnailImage="/img/ogApplecoreBulk.png" 
              addedKeywords="wholesale, bulk orders, retail"
              url="https://www.myapplecore.com/wholesale/"
            />
            <div className="shop-header">
                <h1 style={{color: '#fafafa'}} className="alt-h1">
                    {title}
                </h1>
                <p style={{maxWidth: '32ch'}}>{subheading}</p>
                <div className="background-shop-img"></div>
            </div>
            <Breadcrumbs links={[`wholesale`]} />

            <div className="form-img-flex">
              <div className="contact-container" style={{marginTop: "5%"}}>
                <h2>{bulkContactTitle}</h2>
                <p style={{margin: '1em 0', textAlign: 'left'}}>{wholesaleText}</p>
                <p style={{margin: '1em 0', textAlign: 'left'}}>{businessText}</p>

                <form ref={formRef} name="Wholesale Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => handleSubmit(event)}>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="Wholesale Form" />
                    <div hidden style={{display: 'none'}}>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field"  />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Name/Affiliation
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

                    {feedbackMsg && <p style={{color: '#FB604E !important',  marginTop: '1.5em', textAlign: 'right'}}>{feedbackMsg}</p>}

                </form>
        </div> 
        <div className="form-img-wrap">
          <Img className="form-img" fluid={bulkImg.childImageSharp.fluid} alt={`Applecore wholesale jar`}/> 
        </div>
      </div>
            
        </section>
    )
    }

WholesalePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const WholesalePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <WholesalePageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        bulkContactTitle={frontmatter.bulkContactTitle}
        wholesaleText={frontmatter.wholesaleText}
        businessText={frontmatter.businessText}
        bulkImg={frontmatter.bulkImg}
      />
    </Layout>
  )
}

WholesalePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WholesalePage

export const wholesalePageQuery = graphql`
  query WholesalePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subheading
        bulkContactTitle
        wholesaleText
        businessText
        bulkImg {
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

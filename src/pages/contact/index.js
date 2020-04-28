import React from 'react'
import axios from 'axios'
import { Link } from 'gatsby';
import * as qs from 'query-string';
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { isValidated: false, feedbackMsg: null }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
        //console.log("uncomment in FooterForm for success");
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
   
        const axiosOptions = {
          url: window.location.href,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
        }
      
        axios(axiosOptions)
          .then(response => {
            this.setState({
              feedbackMsg: "Form submitted successfully!",
            })
            this.domRef.current.reset()
          })
          .catch(err =>
            this.setState({
              feedbackMsg: "Form could not be submitted.",
            })
          )

        console.log('message sent');
  }

  render() {
    return (
      <Layout>
        <main className="main-content">
          <section className="main-content-container">
            <div>
              <h1 style={{lineHeight: '1', marginBottom: '1rem'}}>Contact</h1>
             
              <form ref={this.domRef} name={`${this.props.title} Contact Form`} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => this.handleSubmit(event)}>

                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
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
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
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
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button style={{width: '100px'}} type="submit">
                    Send
                  </button>
                </div>
              </form>

{/*              
                Troubleshoot issues: This can be caused by the offline-plugin.
                "https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232"
                  Workaround
                is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
               */}
              
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

import React from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import * as qs from "query-string";

import './unavailableForm.styles.scss';

class UnavailableForm extends React.Component{
    constructor(props){
        super(props)
        this.domRef = React.createRef()
        this.state = { 
            feedbackMsg: null,
            isSubmitted: false
         }
        
    }

    handleSubmit(event) {
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

        this.setState({
            submitted: true
        })
      }

    render(){
        return(
            <div className="unavailable-form-wrapper">
                <h3>{this.props.unavailableText}</h3>
                <p>Get notified when {this.props.title} is available. Sign up below and we will let you know!</p>

                {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

                <form ref={this.domRef} name={`${this.props.title} Availability Form`} method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
                    <input ref="form-name" type="hidden" name="form-name" value={`${this.props.title} Availability Form`} />
                        {/* <!-- ... --> */}

                    <input ref="email" type="email" name="email" placeholder="Your Email Here" required className="email-input"/>
                        {/* <!-- ... --> */}
                    {/* <textarea ref="message" name="message" /> */}
                        {/* <!-- ... --> */}
                    <button className="form-submit" type="submit"><span className="btn-txt">Submit</span></button>
                    {
                        this.state.submitted ? 
                        (<div className="submit-success">
                            <p>Thanks! We'll email you soon. In the mean time, check out our <Link to="/blog">latest articles</Link></p>
                        </div>)
                        : null
                    }
                </form>
            </div>
        )
    }
}

export default UnavailableForm;
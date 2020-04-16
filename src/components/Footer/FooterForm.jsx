import React from 'react';
import axios from 'axios';
import * as qs from "query-string";

import './footerForm.styles.scss';

class FooterForm extends React.Component{
    constructor(props){
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("uncomment in FooterForm for success");
        // const formData = {}
        // Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
   
        // const axiosOptions = {
        //   url: window.location.href,
        //   method: "post",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   data: qs.stringify(formData),
        // }
      
        // axios(axiosOptions)
        //   .then(response => {
        //     this.setState({
        //       feedbackMsg: "Form submitted successfully!",
        //     })
        //     this.domRef.current.reset()
        //   })
        //   .catch(err =>
        //     this.setState({
        //       feedbackMsg: "Form could not be submitted.",
        //     })
        //   )
      }

    render(){
        return(
            <div className="footer-form-wrapper">
                <p>Sign Up For Our Newsletter</p>

                {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

                <form ref={this.domRef} name="Newsletter Form" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
                    <input ref="form-name" type="hidden" name="form-name" value="Newsletter Form" />
                        {/* <!-- ... --> */}

                    <input ref="email" type="email" name="email" placeholder="Your Email Here" required className="email-input"/>
                        {/* <!-- ... --> */}
                    {/* <textarea ref="message" name="message" /> */}
                        {/* <!-- ... --> */}
                </form>
            </div>
        )
    }
}

export default FooterForm;
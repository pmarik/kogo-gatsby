import React, { useState, useRef } from 'react';
import axios from 'axios'
import { Button } from '../buttons/Button.component';
import Loader from '../../images/backgroundLoader.inline.svg';
// import './emailcapture.styles.scss';

const FooterForm = () => {

    const [feedbackMsg, setFeedbackMsg] = useState(null);
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useState(false)
    const [btnMessage, setBtnMessage] = useState("Sign Up")
    const formRef = useRef();
    const emailRef = useRef();

    const encode = data => {
        return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        setLoader(true);

        const axiosOptions = {
        url: window.location.href,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: encode({
            "form-name": formRef.current.getAttribute("name"),
            email: emailRef.current.value,
        })
        }
        
        axios(axiosOptions)
        .then(response => {
            
            setBtnMessage("Success!")
            formRef.current.reset()
            setLoader(false);
        })
        .catch(err => {
            setFeedbackMsg("Form could not be submitted. Please refresh and try again.");
            setLoader(false);
            console.log(err)
        })
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    
    return (
        <div className="email-capture">
            <form ref={formRef} name={`Email Sign Up`} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => handleSubmit(event)}>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value={`Email Sign Up`} />
                  <div hidden style={{display: 'none'}}>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" /> 
                    </label>
                  </div>
                  <div className="field">
                    <div className="control">

                        <div className="group">
                            <input 
                                className="form-input" 
                                ref={emailRef}
                                type={'email'}
                                name={'email'}
                                id={'email'} 
                                required={true}
                                onChange={handleChange}
                            />

                            <label 
                                htmlFor={'email'}
                                className={`${email.length !== 0 ? 'shrink' : '' } form-input-label`} >
                                Enter Email
                            </label>
                        </div>
                    </div>
                  </div>

                  <div className="field">
                    <button
                      type={`submit`}
                      style={{minWidth: '134px', marginTop: '0'}}
                      >
                      <span>{loader ? <Loader style={{margin: '0 auto'}}/> : btnMessage}</span>
                    </button>
                  </div>

                  {feedbackMsg && <p style={{color: '#FB604E !important', marginTop: '1.5em', textAlign: 'right'}}>{feedbackMsg}</p>}

            </form>
        </div>
    )
}

export default FooterForm;
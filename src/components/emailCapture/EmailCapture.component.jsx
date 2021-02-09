import React, { useState, useRef } from 'react';
import axios from 'axios'
import { Button } from '../buttons/Button.component';
import Loader from '../../images/backgroundLoader.inline.svg';
import './emailcapture.styles.scss';

const EmailCapture = ({ info }) => {

    const [feedbackMsg, setFeedbackMsg] = useState(null);
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useState(false)
    const [btnMessage, setBtnMessage] = useState("Sign Up")
    const formRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();

    const encode = data => {
        console.log(Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&"))
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
              product: productRef.current.value,
              info: info.replace(/ /g, ""),
          })
        }

        
        axios(axiosOptions)
        .then(response => {
            console.log({response})
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
            <form ref={formRef} name="Out of Stock Interest" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => handleSubmit(event)}>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="Out of Stock Interest" />
                  <input type="hidden" ref={productRef} name="Product" value={info}/>
                  <div hidden style={{display: 'none'}}>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" /> 
                    </label>
                  </div>
                  <div className="field">
                    {/* <label className="label" htmlFor={'email'}>
                      Email
                    </label> */}
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
                                Email
                            </label>
                        </div>

                      {/* <input
                        ref={emailRef}
                        className="input"
                        type={'email'}
                        name={'email'}
                        id={'email'}
                        required={true}
                      /> */}
                    </div>
                  </div>

                  <div className="field">
                    <button type='submit' style={{minWidth: '134px'}}>
                      <span>{loader ? <Loader style={{margin: '0 auto'}}/> : btnMessage}</span>
                    </button>
                  </div>

                  {feedbackMsg && <p style={{color: '#FB604E !important', marginTop: '1.5em', textAlign: 'right'}}>{feedbackMsg}</p>}

            </form>
        </div>
    )
}

export default EmailCapture;
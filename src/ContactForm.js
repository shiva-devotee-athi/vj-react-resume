import React from 'react'
import { useState,useRef } from 'react';
import "../src/ContactForm.css"
import emailjs from '@emailjs/browser';


const Result = () => {
  return (
    <div>
        <p> 
            Your Message has been Successfully sent...
        </p>
    </div>
  )
};


const ContactForm = () => {
    const [result, showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('Gmail', 'template_bqqf5zo', form.current, '7imVzaREIb8AOD83P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          showResult(true)
      };

      setTimeout(()=>{showResult(false);}, 5000)
  return (

          <div className="formContainer">
            <h2 className='txt-1'>Hey User! If You want to <span style={{color:"red"}}> Contact &#128071;</span> </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                
                <h4>Full Name:</h4>
                 
                <input className="input100" type="text" name="fullName" required />
                 
                <h4>Phone Number:</h4>
                 
                <input className="input100" type="text" name="phone" required />
                 
                <h4>Email:</h4>
                 
                <input className="input100" type="text" name="email" required />
                 
                <h4>Message:</h4>
                 
                <textarea name="message" required></textarea>
                 
                <button >SUBMIT</button>
              </div>
            </form>
            <br/>
            <div className="txt-1">{result ? <Result/> : null}</div>
          </div>
  )
}

export default ContactForm
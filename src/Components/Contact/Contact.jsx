import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { toast } from 'react-toastify'
import axios from 'axios'

const Contact = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'd love to hear from you. Send me an email, fill out a form, or reach out via social media. I'm always here to help.</p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src={mail_icon} alt=""  /><p>anujbhusal96@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+977 9814421053</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Maitidevi, Kathmandu</p>
                </div>
            </div>
        </div>
        <form className = 'contact-right'onSubmit={async (e) => {
        e.preventDefault();
        let UserData = {
          name: name,
          email: email,
          message: message
          
        };

        try {
          let result = await axios({
            url: 'https://6717d409b910c6a6e02a2cd8.mockapi.io/anuj/Contact',
            method: 'post',
            data: UserData
          });
         
          setName('');
          setEmail('');
          setMessage('');
          
          console.log(result.data);
          toast.success("Message Sent successfully")
          
        } catch (error) {
          toast.error("Unable to send message")
        }
      }}
      >
            <label htmlFor="" >Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' id ='name' value={name} required 
            onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="" >Your Email</label>
            <input type="email" name="email" placeholder='Enter Your Email' id ='email' value={email} required 
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" >Write your message here</label>
            <textarea name="message" placeholder='Send a Message' rows="8" id="message" required 
            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className="contact-submit" type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

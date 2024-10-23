import React from 'react'
import './Footer.css'
import LOGO1 from '../../assets/LOGO1.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={LOGO1} alt="" />
                <p>A 20-year-old passionate learner.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Your Email Address" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
                <p>2024 Copyright. All rights reserved.</p>
                
        </div>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            
        </div>
      </div>
        
  
    </div>
  )
}

export default Footer

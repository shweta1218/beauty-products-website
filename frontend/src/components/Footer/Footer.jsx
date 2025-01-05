import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="logo-container">
            <img src={assets.logo} alt=""  className='logo'/>
            <span className="logo-text">Luna Beauty</span>
            </div>
            <p>We are more than just a beauty brand; we are a community. Our mission is to empower individuals to feel 
              confident in their skin, celebrate their unique beauty, and embrace self-care as an essential part of their 
              everyday routine. With a commitment to cruelty-free and eco-friendly practices, we strive to make the world a more beautiful place, 
              inside and out.</p>
            <div className="footer-social-icons">
                <img src={assets.insta_icon} alt="" />
                <img src={assets.pin_icon} alt="" />
                <img src={assets.Whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-213-567-7980</li>
                <li>contact@lunabeauty.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ lunabeauty.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
      <div className="footer-section">
        <div className='footer-container'>
        <div className='footer-left'>
            <div className='footer-logo' >
                <img src="images/Footer-logo.png" alt="" />
            </div>

            <div className='socials'>
                <h4>Follow Us:</h4>
                <div className='social-icons'>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
        <div className='footer-menu'>
            <h4>Menu</h4>
             <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Specialities</a></li>
                <li><a href="#">Scans</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Our Branches</a></li>                                                                                           
            </ul>
        </div>
        <div className='footer-contact'>
            <h4>Contact Us</h4>
            <ul>
                <li><a href="#">GSTIN</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Telegram</a></li>
            </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
        <p>© 2021 All Rights Reserved</p>
      </div>
      </div>
      

    </div>
  )
}

export default Footer

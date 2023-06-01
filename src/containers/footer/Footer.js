import React from 'react'

// icons
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// import images
import footerlogo from "../../assets/Logo.png";
import visa from "../../assets/Visa.png";
import bitcoin from "../../assets/Bitcoin.png";
import mastercard from "../../assets/Mastercard (1).png";
// import css file
import './footer.css';

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer-contant">
        <div className="footer_flex-box">
          <div className="footer_logo">
            <img src={footerlogo} alt="" />
          </div>
          <div className="quick_links">
            <h2>Quick Links</h2>
            <p><a href="">Home</a></p>
            <p><a href="">About</a></p>
            <p><a href="">Features</a></p>
            <p><a href="">Products</a></p>
            <p><a href="">Contact</a></p>
          </div>
          <div className="quick_links">
            <h2>Resourses</h2>
            <p><a href="">Download whitepaper</a></p>
            <p><a href="">Smart Token</a></p>
            <p><a href="">Blockchain Explorer</a></p>
            <p><a href="">Crypto API</a></p>
            <p><a href="">Interest</a></p>
          </div>
          <div className="payment_gateways">
            <h1>We accept following <br/>payment systems</h1>
            <div className="payment_gateways-imgs">
                <img src={visa} alt="visa" />
                <img src={bitcoin} alt="bitcoin" />
                <img src={mastercard} alt="mastercard" />
            </div>
          </div>
      </div>
        <div className="copyright_text">
          <div className="copy_content-text">
            <h3>©2021 CRAPPO. All rights reserved</h3>
          </div>
            <div className="social_links">
                <a href=""><FaInstagram /></a>
                <a href=""><FaFacebook /></a>
               <a href=""><FaYoutube /></a>
               <a href=""><FaTwitter /></a>
               <a href=""><FaLinkedin /></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
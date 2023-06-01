import React from 'react';
// Import images
import crypto from "../../assets/crypto.png"
// import Fade 
import { fadeIn } from '../../variant.js';
// import motion from react
import { motion } from 'framer-motion';
// Import css file
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">

    <motion.div 
    variants={fadeIn('right', 0.5)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
    className="header-content">

      <div className="header-content__sale">
        <span>75% Sale</span>
        <h3>For the Black Friday weekend</h3>
      </div>

      <h1 className="Header_text">Fastest & secure platform to invest in crypto</h1>
      <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
        <div className="btn-main-try">
      <a href="">Try For Free</a>
      </div>
      </motion.div>

    <div className="header-image">
      <img src={crypto} alt="" />
    </div>

  
  </div>
);

export default Header;
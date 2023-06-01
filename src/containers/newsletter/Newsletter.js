import React from 'react';
// import Fade in
import { fadeIn } from '../../variant';
// Motion
import { motion } from 'framer-motion';
// import css file
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='News_letter section__padding'>
      <motion.div
      variants={fadeIn('up', 0.5)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
      className="container">
        <label>Enter your Email</label>
        <input type="text"/>
        <button>Subscribe</button>
      </motion.div>
    </div>
)
}

export default Newsletter
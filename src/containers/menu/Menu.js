import React from 'react'
// Import Images
import illustration from "../../assets/Illustrations.png"
// Import labraries
import {motion} from "framer-motion";
import { fadeIn } from '../../variant';
// import Css
import './menu.css';

const Menu = () => {
  return (
    <div className="Menu section__padding">

    <div className="Menu-img">
      <img src={illustration} alt="featureImage" />
    </div>
    <motion.div 
        variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className="Menu-content">
        <h1 className="Menu_heading">Why you should choose CRAPPO</h1>
        <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
        <div className="btn-main-try">
        <a href="">Learn More</a>
      </div>
      </motion.div>
    </div>
  )
}

export default Menu
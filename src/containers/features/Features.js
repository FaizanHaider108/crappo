import React from 'react'
// import motion
import { motion } from "framer-motion"
// import fadein
import { fadeIn } from "../../variant"
// import image
import chart from '../../assets/Chart.png';
import base from "../../assets/base.png";
import table from "../../assets/Table.png";
import './features.css';

const Features = () => {
  return (
    <div className='features section__padding' id='features'>
      <div className="features_content">
        <div className="feature_heading">
          <h1>Market sentiments, portfolio, and run the infrastructure of your choice</h1>
        </div>
        {/* flex-box - 1 */}
        <motion.div 
         variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className="features_flex-box">
          <div className="features_box-content">
              <h2>Invest Smart</h2>
              <p>Get full statistic information about the behaviour of <br/> buyers and sellers will help you to make the decision</p>
              <div className="learn_bore-btn">
                <a href="">Learn More</a>
              </div>
          </div>
          {/* Image */}
          <div className="features_img">
            <img src={chart} alt="" />
          </div>
        </motion.div>
        {/* flex-box - 1 */}
        <motion.div 
         variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className="features_flex-box">
            {/* Image */}
          <div className="features_img">
            <img src={base} alt="" />
          </div>
          <div className="features_box-content">
              <h2>Detailed Statistics</h2>
              <p>View all mining related information in realtime, at <br/>any point at any location and decide which polls you want to mine in.</p>
              <div className="learn_bore-btn">
                <a href="">Learn More</a>
              </div>
          </div>
        </motion.div>
         {/* flex-box - 1 */}
        <motion.div 
         variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className="features_flex-box">
          <div className="features_box-content">
              <h2>Grow your profit and track your investments</h2>
              <p>Use advanced analytical tools. Clear TradingView <br/> charts let you track current and historical profit investments.</p>
              <div className="learn_bore-btn">
                <a href="">Learn More</a>
              </div>
          </div>
          {/* Image */}
          <div className="features_img">
            <img src={table} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Features
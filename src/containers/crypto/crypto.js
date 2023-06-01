import React from 'react'
// Import Libraries
import {motion} from "framer-motion";
import {fadeIn} from "../../variant"
// import css file
import "./crypto.css";


const Crypto = () => {
  return (
     <div className='crypto section__padding'>
      <div className="crypto_contect">
        <h1>Check how much you can earn</h1>
        <p>Let’s check your hash rate to see how much you will earn today,<br /> Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
       {/* possiblity image */}
      <motion.div 
       variants={fadeIn('up', 0.5)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
      className="crypto_input">
        {/* Form */}
        <form action="">
          <input type="text" placeholder='Enter your hash rate'/>
          <select name="Coins" id="Coins">
            <option value="">BTC</option>
            <option value="">ETH</option>
            <option value="">TCL</option>
          </select>
          <div className="btn-calculate">
            <button>Calculate</button>
          </div>
        </form>
      {/* display earning */}
        <div className="revenue_display">
          <div className="revenue_display-content">
            <h3>ESTIMATED 24 HOUR REVENUE:</h3>
            <h1>0.055 130 59 ETH <span>($1275)</span> </h1>
            <p>Revenue will change based on mining difficulty and Ethereum price</p>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Crypto
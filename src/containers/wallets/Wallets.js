import React from 'react';
// import images
import ETH from "../../assets/ETH.svg";
import BTC from "../../assets/BTC.png";
import LTC from "../../assets/LTC.png";
// import css
import './wallets.css';

const Wallets = () => {
  return (
    <div className='wallets' id='products'>
      <div className="wallets_contact">
        <h1>Trade securely and market the high growth cryptocurrencies</h1>
      </div>

      <div className="wallet-flex_box">
        <div className="wallet-product">

          <div className="coin-icon">
            <img src={BTC} alt="BTC" />
          </div>
          <h3>Bitcoin <span>BTC</span></h3>
          <p>Digital currency in which a record of transactions is maintained</p>
          <div className="start_mining-link">
            <a href="">Start mining</a>
          </div>
          
        </div>
        <div className="wallet-product">

          <div className="coin-icon">
            <img src={ETH} alt="ETH" />
          </div>
          <h3>Ethereum <span>ETH</span></h3>
          <p>Blockchain technology to create and run decentralized digital applications</p>
          <div className="start_mining-link">
            <a href="">Start mining</a>
          </div>
          
        </div>
        <div className="wallet-product">

          <div className="coin-icon">
            <img src={LTC} alt="ETH" />
          </div>
          <h3>Litecoin <span>LTC</span></h3>
          <p>Cryptocurrency that enables instant payments to anyone in the world</p>
          <div className="start_mining-link">
            <a href="">Start mining</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Wallets
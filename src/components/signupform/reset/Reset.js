import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Logo.png"
import "./reset.css";

const Reset = () => {
  return (
    <div className='register section__padding'>
      <div className='register_form'>
        <div className='register_form-img'>
          <img src={logo}></img>
          <h1>Enter OTP</h1>
          <span>Check your Email we have sent you an OTP 📧</span>
        </div>
        <form className='register_form-content'>
            <label>Enter your OTP here</label>
            <input></input>
            <button type='submit'>Submit</button>
            </form>
      </div>
    </div>
  )
}

export default Reset
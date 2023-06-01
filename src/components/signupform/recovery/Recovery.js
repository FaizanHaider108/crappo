import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Logo.png"
import "./recovery.css";

const Recover = () => {
  return (
    <div className='register section__padding'>
      <div className='register_form'>
        <div className='register_form-img'>
          <img src={logo}></img>
          <h1>Recover your Email</h1>
          <span>We will send you OTP reset your password</span>
        </div>
        <form className='register_form-content'>
            <label>Enter your Email</label>
            <input></input>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Recover
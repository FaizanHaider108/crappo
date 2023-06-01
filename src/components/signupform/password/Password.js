import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Logo.png"
import "./password.css";

const Password = () => {
  return (
    <div className='register section__padding'>
      <div className='register_form'>
        <div className='register_form-img'>
          <img src={logo}></img>
          <h1>Reset your Password</h1>
          <span></span>
        </div>
        <form className='register_form-content'>
            <label>Enter new Password</label>
            <input></input>
            <label>Confirm your Password</label>
            <input></input>
            <button type='submit'>Reset password</button>
            </form>
      </div>
    </div>
  )
}

export default Password
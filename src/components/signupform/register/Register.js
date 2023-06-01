import React from 'react';
import { Link } from 'react-router-dom';
import leftArrow from "../../../assets/left-arrow (1).png"
import "./register.css";
import google from "../../../assets/google.png"
import logo from "../../../assets/Logo.png"
const Register = () => {
  return (
    <div className='register section__padding'>
      <div className="backArrow_img">
      <Link to="/">
          <img src={leftArrow} alt='backArrow'></img>
      </Link>
     </div>
      <div className='register_form'>
        <div className='register_form-img'>
          <img src={logo}></img>
          <h1>Create Account</h1>
          <span>Let's get started with your 30 Days free trail</span>
        </div>
        <form className='register_form-content'>
            <label>Name *</label>
            <input></input>
            <label>Email *</label>
            <input></input>
            <label>Password *</label>
            <input></input>
           
            <button type='submit'>Sign up</button>

            <div className='have_account'>
              <h3>Already have an account ?</h3>
              <Link to="/login">Sign in</Link>
            </div>
            <a href="#" class="google-btn">
             <img src={google} alt="Google Icon" class="google-icon"></img>
               <h3>Sign up with Google</h3>
            </a>
        </form>
      </div>
    </div>
  )
}

export default Register
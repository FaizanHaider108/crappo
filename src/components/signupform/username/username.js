import React from 'react';
import { Link } from 'react-router-dom';

import "./username.css";
import google from "../../../assets/google.png"
import leftArrow from "../../../assets/left-arrow (1).png"
import logo from "../../../assets/Logo.png"
const Username = () => {
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
          <h1>Hey, hello 👋</h1>
          <span>Enter the information you entered while registering</span>
        </div>
        <form className='register_form-content'>
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <div className='remember_me'>
              <label>
                <input type="checkbox"></input>
                Remember me
                </label>
                <Link to='/recovery'>Forget passoword ?</Link>
            </div>
            <button type='submit'>Log in</button>

            <div className='have_account'>
              <h3>Don't have an account ?</h3>
              <Link to="/register">Sign up</Link>
            </div>
            <a href="#" class="google-btn">
             <img src={google} alt="Google Icon" class="google-icon"></img>
               <h3>Sign in with Google</h3>
            </a>
        </form>
      </div>
    </div>
  
  )
}

export default Username
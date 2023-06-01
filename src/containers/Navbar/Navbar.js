import React, {useState} from 'react';
// import Link
import { Link } from 'react-router-dom';
// Import Icons from React-icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// Import LOGO
import logo from "../../assets/Logo.png"
// import css file
import './Navbar.css';




const Navbar = () => {
  // Use State
  const [toggleMenu, settoggleMenu] = useState(false);
 
  return (
    <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-logo'>
            <a href="#home">
              <img src={logo} alt="logo"/>
              </a>
          </div>
           <div className='navbar-links_container'>  
            <p><a href="#products">Products</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
           <div className='navbar-links_sign'>
         <p><Link to="/login">Log in</Link></p>
          <span></span>
          <button type='button'><Link to="/register">Register</Link></button>
        </div>
        </div>
        {/* Mobile menu */}
       <div className='navbar_Menu'>
         {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => settoggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => settoggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up'>
              <div className='navbar-menu_container_links'>
                <p><a href="">Products</a></p>
                <p><a href="features">Features</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Contact</a></p>
                <div className='navbar-links_sign_container'>
                 <p><Link to="/login">Log in</Link></p>
                <span></span>
                <button type='button'><Link to="/register">Register</Link></button>
        </div>
      </div>
    </div>
        )}
       </div>
    </div>
  )
}

export default Navbar
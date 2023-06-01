import React from 'react';
// Routes

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import all components for Roots

import Username from "./components/signupform/username/username";
import Register from "./components/signupform/register/Register";
import Reset from "./components/signupform/reset/Reset";
import Recovery from "./components/signupform/recovery/Recovery";
import Password from "./components/signupform/password/Password";

// import containers
import Navbar from "./containers/Navbar/Navbar"
import Header from './containers/header/Header';
import Content from './containers/content/Content';
import Menu from "./containers/menu/Menu";
import Crypto from './containers/crypto/crypto';
import Wallets from "./containers/wallets/Wallets"
import Features from './containers/features/Features';
import Footer from "./containers/footer/Footer"
import Newsletter from './containers/newsletter/Newsletter';
// Import Css file
import "./App.css"
import Contact from './containers/contact/Contact';


const router  = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Header />
        <Content />
        <Menu />
        <Crypto />
        <Wallets />
        <Features />
        <Contact />
        <Newsletter />
        <Footer />
      </>
    )
  },
  {
    path: "/Login" ,
    element: <Username></Username>
  },
  {
    path: "/register" ,
    element: <Register></Register>
  },
  {
    path: "/reset" ,
    element: <Reset></Reset>
  },
  {
    path: "/recovery" ,
    element: <Recovery></Recovery>
  },
  
  {
    path: "/Password" ,
    element: <Password></Password>
  },
  
])

const App = () => {
  return (
    <main>
      <RouterProvider router={router}>
         <Navbar />
        <Header />
        <Content />
        <Menu />
        <Crypto />
        <Wallets />
        <Features />
        <Contact />
        <Newsletter />
        <Footer />
      </RouterProvider>
      </main>
   
    
  );
};

export default App;

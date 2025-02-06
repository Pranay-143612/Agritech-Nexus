//import React, { useState, useEffect } from 'react';
import './front.css';
import { NavLink } from 'react-router-dom';
//import entry from './entry.jpg';
import AboutUs from './About Us/AboutUs';
import Features from './features/Features';
import ContactUs from './Contact us/ContactUs';
import back from './rb_854.png'


function Front() {

  return (
    <div className='entry-page'>
      <div className='navigation'>
        <div className='title'>
          <h2>Agritech Nexus</h2>
        </div>
        <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Contact Us</li>
          </ul>
          <div className='front-btn'>
            <NavLink to='/login'>
              <button type="button"><span></span>Login</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='welcome'>
        <div className='details-welcome'>
          <div className='image-text'>
            <div className='text'>
              <div className='head' style={{display:"flex", gap:"11px"}}>
              <h1>Welcome to</h1>
              <h1 className='span-text'>Agritech Nexus!</h1>
              </div>
              <p>A collaborative platform to ask questions, share knowledge, and find insightful answers.
                Connect with experts, peers, and communities to solve problems and exchange ideas.
                Empower learning and discovery through engaging discussions and shared expertise.</p>
              <div className='login-inside'>
                <NavLink to='/login'>
                  <button type="button"><span></span>Sign in</button>
                </NavLink>
              </div>
            </div>
            <div className='image'>
              <img src={back} alt="entry" />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Features />
      <ContactUs />
    </div>
  );
}

export default Front;

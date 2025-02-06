import React from 'react';
import { NavLink } from 'react-router-dom';
import './front.css';
import AboutUs from './About Us/AboutUs';
import Features from './features/Features';
import ContactUs from './Contact us/ContactUs';
import back from './rb_854.png';
import Innovators from './Innovators/Innovators';

function Front() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='entry-page' id='home'>
      <div className='navigation'>
        <div className='title'>
          <h2>Agritech Nexus</h2>
        </div>
        <div className='navbar'>
          <ul>
            <li><a href='#home' onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href='#about' onClick={() => scrollToSection('about')}>About Us</a></li>
            <li><a href='#features' onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a href='#contact' onClick={() => scrollToSection('contact')}>Contact Us</a></li>
          </ul>
          <div className='front-btn' style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <NavLink to='/farmers-market' className="farmermarket">
              Farmer's Market
            </NavLink>
            <NavLink to='/login'>
              <button type='button'><span></span>Login</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='welcome'>
        <div className='details-welcome'>
          <div className='image-text'>
            <div className='text'>
              <div className='head' style={{ display: "flex", gap: "11px" }}>
                <h1>Welcome to</h1>
                <h1 className='span-text'>Agritech Nexus!</h1>
              </div>
              <p>Agritech Nexus is a collaborative platform to ask questions, share knowledge, and find insightful answers. Connect with experts, peers, and communities to solve agricultural challenges, exchange ideas, and stay informed. Farmers can sell their produce directly to consumers, ensuring fair pricing and better profits. The platform also provides real-time updates on seasonal crops, best farming practices, and market trends, fostering innovation and sustainability.</p>
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
      <section id='about'>
        <AboutUs />
      </section>
      <section id='features'><Features /></section>
      <section id='contact'><ContactUs /></section>
      <section id='innovators'><Innovators /></section>

    </div>
  );
}

export default Front;

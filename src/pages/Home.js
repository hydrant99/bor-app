import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // For navigation between pages
import heropic1 from '../images/IMG_2951.jpg';
import '../App.css';
import useDeviceType from '../useDeviceType.js';

const Home = () => {
  const deviceType = useDeviceType();  // Get device type ('Mobile' or 'Desktop')
  
  return (
    <div className="HomePageGrid">
      {/* Hero Section */}
      <div className="hero-text">
        <h1>give the gift that rocks!</h1>
        <p>the box of rocks is <i>the</i> gift for <i>that</i> person you know. </p>
        <Link to="/Product">
          <button className="button">Shop</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={heropic1} alt="Box of Rocks" />
      </div>
      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"My boyfriend was so confused!"</p>
            <p>- Scarlett M. from Minnesota</p>
          </div>
          <div className="testimonial">
            <p>"Why did I get a box of rocks??"</p>
            <p>- Mark O. from New York</p>
          </div>
          <div className="testimonial">
            <p>"This was so randomly funny."</p>
            <p>- George G. from Mississippi </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

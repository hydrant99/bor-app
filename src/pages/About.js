import React from 'react';
import '../App.css';

// Import images
import orderImage from '../images/dogpaw.jpg';
import shipImage from '../images/weship.png';
import laughImage from '../images/Product Images v4-6.png';


const About = () => {
  return (
    <div className="about-page">
      <h1>About </h1>
      <div className="MessageBox">We are a small shop located in Minnesota.  What started out as a joke amongst friends turned into a little project to deliver boxes of rocks around the United States.  </div>

      {/* How It Works */}
      <h2>How it works: </h2>    
      <div className="howitworks-grid">
        <div className="howitworks-column">
          <img src={orderImage} alt="Order" className="howitworks-icon" />
          <h4>you order</h4>
       
        </div>

        <div className="howitworks-column">
          <img src={shipImage} alt="Ship" className="howitworks-icon" />
          <h4>we ship</h4>
        </div>

        <div className="howitworks-column">
          <img src={laughImage} alt="Laugh" className="howitworks-icon" />
          <h4>they laugh</h4>
        </div>
      </div>
     
      
      {/* Placeholder for map */}
      
      <div className="map-header"> who got rocked? </div>
      
      <div className="map-placeholder">
        <p>Map of orders coming soon!</p>
      </div>
    </div>
  );
};

export default About;

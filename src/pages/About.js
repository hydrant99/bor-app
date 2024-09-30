import React from 'react';
import '../App.css';


// Import images
import orderImage from '../images/dogpaw.jpg';
import shipImage from '../images/weship.png';
import laughImage from '../images/laugh.webp';
import aboutImage from '../images/Product Images v4-6.png';

const About = () => {
  

  return (
    <div className="about-page">
      {/* Main Section: Text on the left, Image on the right */}
      <div className="main-section">
        <div className="main-text">
          <p>
            Thanks for checking us out! <br/> 
            http://www.theboxofrocks.com started out as a silly idea amongst friends! Now we can share the laughter across the U.S.! <br/>
          </p>
        </div>
        <div className="main-image">
          <img src={aboutImage} alt="About us"  />
        </div>
      </div>

      {/* How It Works */}
      <h1>How it works: </h1>
      
      {/* Reusing the Testimonials Class for How It Works */}
      <div className="testimonials-grid">
        <div className="testimonial">
          <img src={orderImage} alt="Order" className="howitworks-icon" />
          <h3>You order</h3>
          <p>We will pack up your rocks with 1 of four messages attached.</p>
        </div>

        <div className="testimonial">
          <img src={shipImage} alt="Ship" className="howitworks-icon" />
          <h3>We ship</h3>
          <p>The box will come in a blue mailer with a shipping label.</p>
        </div>

        <div className="testimonial">
          <img src={laughImage} alt="Laugh" className="howitworks-icon" />
          <h3>They laugh</h3>
          <p>Capture your friend's reaction and tag us on the socials lol.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import '../App.css';
import useDeviceType from '../useDeviceType.js';

// Import images
import orderImage from '../images/dogpaw.jpg';
import shipImage from '../images/dogpaw.jpg';
import laughImage from '../images/dogpaw.jpg';
import aboutImage from '../images/Product Images v4-6.png';

const About = () => {
  const deviceType = useDeviceType();  // Get device type ('Mobile' or 'Desktop')

  return (
    <div className="about-page">
      {/* Main Section: Text on the left, Image on the right */}
      <div className="main-section">
        <div className="main-text">
          <p>
            Thanks for checking us out! http://www.theboxofrocks.com started out as a silly idea amongst friends! <br/>
            I do actually have an inventory of these in my basement so if you want one feel free to order through the paypal link and I'll ship it out. <br/>
            Honestly the margins on sending a 1 pound box through the mail aren't great - so 12.99 +shipping is just about the only price I've found that will work.  
          </p>
        </div>
        <div className="main-image">
          <img src={aboutImage} alt="About us" />
        </div>
      </div>

      {/* How It Works */}
      <h1>How it works: {deviceType}</h1>
      
      {/* How It Works Section */}
      <div className="howitworks">
        <div className="howitworks-item">
          <img src={orderImage} alt="Order" />
          <h3>You order</h3>
          <p>"We will pack up your rocks with 1 of four messages attached."</p>
        </div>

        <div className="howitworks-item">
          <img src={shipImage} alt="Ship" />
          <h3>We ship</h3>
          <p>"The box will come in a blue mailer with a shipping label."</p>
        </div>

        <div className="howitworks-item">
          <img src={laughImage} alt="Laugh" />
          <h3>They laugh</h3>
          <p>"Capture your friend's reaction and tag us on the socials lol."</p>
        </div>
      </div>
    </div>
  );
};

export default About;

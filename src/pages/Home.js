import React from 'react';
import { Link } from 'react-router-dom';  // For navigation between pages
import heropic1 from '../images/IMG_2951.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroTextStyle}>
          <h1>Give the gift that rocks!</h1>
          <p>The box of rocks is the gift for that person you know.</p>
          <Link to="/Product">
            <button style={buttonStyle}>Shop</button>
          </Link>
        </div>
        <div style={heroImageStyle}>
          <img 
            src={heropic1} 
            alt="Hero"
            style={{ width: '75%', height: '50%', borderRadius: '15px' }}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={testimonialsSectionStyle}>
        <h2>What Our Customers Are Saying</h2>
        <div style={testimonialsGridStyle}>
          <div style={testimonialStyle}>
            <p>"Amazing service and products!"</p>
            <p>- Customer 1</p>
          </div>
          <div style={testimonialStyle}>
            <p>"Fast shipping and great quality!"</p>
            <p>- Customer 2</p>
          </div>
          <div style={testimonialStyle}>
            <p>"Highly recommended!"</p>
            <p>- Customer 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const heroSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
  backgroundColor: '#f5f5f5',
  flexWrap: 'wrap', // Allow items to wrap on smaller screens
};

const heroTextStyle = {
  flex: '1',
  paddingRight: '20px',
  minWidth: '300px', // Prevent text from shrinking too much
  textAlign: 'center', // Center-align on mobile
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const heroImageStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center', // Center image on smaller screens
};

const testimonialsSectionStyle = {
  padding: '50px',
  textAlign: 'center',
  backgroundColor: '#fafafa',
};

const testimonialsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginTop: '30px',
  justifyItems: 'center', // Center items in grid
  // Media query for responsive grid
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr', // Single column on mobile
  },
  '@media (min-width: 769px) and (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns on tablets
  }
};

const testimonialStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%', // Make testimonials fill their container on smaller screens
};

export default Home;

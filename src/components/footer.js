import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import SocialMediaBar from './SocialMediaBar';

const Footer = () => {
  return (
    <footer className="footer">
      <SocialMediaBar />
      <div>
        © {new Date().getFullYear()} The Box of Rocks LLC | Lakeville, MN | All rights reserved
      </div>
      <div>
        <Link to="/return-policy">Return & Refund Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

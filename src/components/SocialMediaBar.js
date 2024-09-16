import React from 'react';
import fb from '../images/icons/facebook-2.svg';
import insta from '../images/icons/instagram-2.svg';
import twit from '../images/icons/twitter.svg';
import tik from '../images/icons/tiktok.svg';
import pin from '../images/icons/pinterest.svg';
import yt from '../images/icons/youtube-2.svg';
import '../App.css'; // Import CSS file


const NavBar = () => {
  return (
    <div className="navBar">
    
      <div className="socialIcons">
        <a href="https://www.facebook.com/the.boxofrocks2/" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={fb} alt="Facebook" className="iconStyle" />
        </a>
        <a href="https://www.instagram.com/the.boxofrocks/" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={insta} alt="Instagram" className="iconStyle" />
        </a>
        <a href="https://www.youtube.com/@the.boxofrocks" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={yt} alt="YouTube" className="iconStyle" />
        </a>
        <a href="https://www.tiktok.com/@theboxofrocks?lang=en" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={tik} alt="TikTok" className="iconStyle" />
        </a>
        <a href="https://x.com/theboxofrocks" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={twit} alt="Twitter" className="iconStyle" />
        </a>
        <a href="https://www.pinterest.com/RockMaster2024/" target="_blank" rel="noopener noreferrer" className="iconLink">
          <img src={pin} alt="Pinterest" className="iconStyle" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;

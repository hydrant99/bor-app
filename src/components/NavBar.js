import React, { useState, useRef, useEffect } from 'react';
import NavLinks from './NavLinks'; // Import the shared NavLinks component
import { Link } from 'react-router-dom'; // If using react-router
import logo from '../images/lolo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage the state of the menu
  const menuRef = useRef(null); // Reference for dropdown menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu's open state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Close menu if clicking outside of it
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="header">
    {/* Left-aligned Logo */}
    <div className="nav-logo">
      <Link to="http://www.theboxofrocks.com" className="logo-text">
        {/* Logo Image */}
        <img src={logo} alt="Box of Rocks Logo" className="logo-image" />
        
      </Link>
    </div>
  
  

      {/* Center-aligned NavLinks */}
      <div className="nav-links-center">
        <NavLinks />
      </div>

      {/* Right-aligned Waffle Icon */}
      <div className="waffleContainer">
        <div className="waffle-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      {/* Dropdown menu when waffle is clicked */}
      {menuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <NavLinks closeMenu={closeMenu} /> {/* Pass closeMenu as a prop */}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

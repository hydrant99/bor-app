import React from 'react';
import NavLinks from './NavLinks'; // Import the shared NavLinks component

const NavBar = () => {
  return (
    <nav>
   
   <NavLinks /> {/* Use NavLinks component */}
   <hr className="CustomHR" />
    </nav>
   
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            Contact
          </NavLink>
        </li>
      </ul>
      <hr className="CustomHR" />
    </nav>
   
  );
};

export default NavBar;

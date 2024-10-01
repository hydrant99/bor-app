import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ closeMenu }) => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} onClick={closeMenu}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Divider under the UL list */}
      <hr className="CustomHR" />
    </>
  );
};

export default NavLinks;

import React from 'react';
import './Navbar.css';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>Furniture.com</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" exact activeClassName="active-link">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active-link">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">CONTACT</NavLink>
        </li>
      </ul>
      <div className="nav-icons">
        <FaSearch className="nav-icon" />
        <FaHeart className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
        <NavLink to="/signup" className="signup" activeClassName="active-link">SIGNUP</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

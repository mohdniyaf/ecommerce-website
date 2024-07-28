import React from 'react';
import './Navbar.css';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../CONTEXT/Store';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
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
      <NavLink to="/cart" activeClassName="active-link"  ><FaShoppingCart className="nav-icon" /></NavLink>
        {isLoggedIn ? (
          <>
          <NavLink to="/account" activeClassName="active-link" size={30}><RiAccountCircleFill className="nav-icon" /></NavLink>
          </>
        ) : (
          <NavLink to="/signup" className="signup" activeClassName="active-link">SIGNUP</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

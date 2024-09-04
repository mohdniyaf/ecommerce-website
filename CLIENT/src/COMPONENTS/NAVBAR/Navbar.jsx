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
        <h1>SpaceClassic</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" exact activeClassName="active-link">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/allproduct" activeClassName="active-link">ALL PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/chair" activeClassName="active-link">CHAIR</NavLink>
        </li>
        <li>
          <NavLink to="/box" activeClassName="active-link">DINNING TABLE</NavLink>
        </li>
      </ul>
      <div className="nav-icons">
        <FaSearch className="nav-icon" />
        <FaHeart className="nav-icon" />
      <NavLink to="/cart" activeClassName="active-link"  ><FaShoppingCart className="nav-icon" /></NavLink>
        {isLoggedIn ? (
          <>
          <NavLink to="/account/profile" activeClassName="active-link" size={30}><RiAccountCircleFill className="nav-icon" /></NavLink>
          </>
        ) : (
          <NavLink to="/signup" className="signup" activeClassName="active-link">SIGNUP</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

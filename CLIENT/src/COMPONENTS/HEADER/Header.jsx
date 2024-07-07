import React from 'react';
import { assets } from '../../assets/assest';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
        <div className="header-text">
          <h1 className="header-title">MODERN<br />FURNITURE</h1>
          <p className="header-subtitle">Make your home unique! You will find everything you need for this: furniture of strong  character and beautiful decor and accessories, helpful answers to your questions on interior design and inspiring home ideas.</p>
          <div className="header-buttons">
            <button className="header-button buy-now">Buy Now</button>
            <button className="header-button view-project">View Project</button>
          </div>
        </div>
      </div>
    

    </header>
  );
};

export default Header;

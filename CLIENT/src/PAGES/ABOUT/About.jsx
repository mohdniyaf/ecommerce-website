import React from 'react';
import './About.css';
import { assets } from '../../assets/assest';
import { FaTruck, FaShoppingCart, FaHeadset, FaUndo } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Why Choose Us?</h1>
        <p className="main-description">
          Discover the reasons why we stand out from the rest.
        </p>
        <div className="features">
          <div className="feature">
            <FaTruck className="icon" />
            <div>
              <h2>Fast and Free Shipping</h2>
              <p>Experience swift delivery with no shipping costs on all orders over $50.</p>
            </div>
          </div>
          <div className="feature">
            <FaShoppingCart className="icon" />
            <div>
              <h2>Easy to Shop</h2>
              <p>Enjoy a seamless and user-friendly shopping experience from start to finish.</p>
            </div>
          </div>
          <div className="feature">
            <FaHeadset className="icon" />
            <div>
              <h2>24x7 Support</h2>
              <p>Get assistance anytime with our round-the-clock customer support.</p>
            </div>
          </div>
          <div className="feature">
            <FaUndo className="icon" />
            <div>
              <h2>Easy Returns</h2>
              <p>Return products with ease within 30 days for a hassle-free experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <img src={assets.image1} alt="Living Room" />
        </div>
      </div>
    </div>
  );
}

export default About;

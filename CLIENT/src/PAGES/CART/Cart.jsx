import React from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const Cart = () => {
  return (
    <div className="cart-container">
      <section className="cart-box">
        <div className="cart-heading">
          <h3>Product</h3>
          <h3 className="cart-heading-price">Price</h3>
          <h3 className="cart-heading-quantity">Quantity</h3>
          <h3 className="cart-heading-total">Total</h3>
        </div>

        <div className="cart-item">
          <img src="path_to_your_image.jpg" alt="Product" className="cart-img" />
          <div className="cart-details">
            <h3>Product Name</h3>
            <p>Product Description</p>
          </div>
          <div className="cart-price">$99.99</div>
          <div className="cart-quantity">1</div>
          <div className="cart-total">$99.99</div>
          <button className="remove-button">
            <FaTrash /> {/* Delete icon */}
            REMOVE
          </button>
        </div>
        
        <div className="cart-coupon">
          <input
            type="text"
            className="coupon-input"
            placeholder="Coupon code"
          />
          <button>Apply Coupon</button>
          <button>Show Coupon</button>
        </div>
      </section>

      <section className="cart-summary">
        <h2>Cart Total</h2>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>$99.99</span>
        </div>
        <div className="summary-item">
          <span>Your Savings:</span>
          <span>$10.00</span>
        </div>
        <div className="summary-item">
          <span>Coupon Discount:</span>
          <span>$5.00</span>
        </div>
        <div className="summary-item total">
          <span>Total Amount:</span>
          <span>$84.99</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </section>
    </div>
  );
};

export default Cart;

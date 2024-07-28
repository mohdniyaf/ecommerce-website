import React, { useState } from 'react';
import './myorder.css';

const OrderInfo = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="myorder">
      <div className="myorder-head">
        <h2>MyOrder</h2>
      </div>
      <div className="search-bar">
        <form action="">
          <input
            type="text"
            className="form"
            placeholder="Search order"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
        <button className="search-button">Search</button>
      </div>
      <div className="order-category">
        <button className="category-button">Done</button>
        <button className="category-button">Open Order</button>
        <button className="category-button">Canceled Order</button>
        <button className="category-button">Returned Order</button>
      </div>
      <div className="order-section">
  <h3>Order Placed</h3>
  <div className="order-box">
    <div className="order-image">
      <img src="path/to/image.jpg" alt="Order Item" />
    </div>
    <div className="order-details">
      <p>Order Placed: <span className="date">01/01/2024</span></p>
      <p className="order-status">Pending</p>
      <p>Total: <span className="total">$100.00</span></p>
      <p>Ship to: <span className="ship-to">John Doe</span></p>
      <p>Order#: <span className="order-id">123456</span></p>
    </div>
    <div className="order-actions">
      <button className="action-button return-order">Return Order</button>
      <button className="action-button leave-review">Leave Review</button>
      <button className="action-button track-order">Track Order</button>
      <button className="action-button cancel-order">Cancel Order</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default OrderInfo;

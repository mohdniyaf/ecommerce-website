import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, image, name, price }) {
  
  return (
    <div className="shop-item">
      <Link to={`/product/${id}`}>
      <img src={`http://localhost:3000/${image}`} alt={name} className="shop-img" />
      </Link>
      <div className="item-details">
        <p>{name}</p>
        <p>${price}</p>
        <button>ADD Cart</button>
      </div>
    </div>
  );
}

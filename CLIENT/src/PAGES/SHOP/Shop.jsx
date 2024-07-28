import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Sample Product',
    realPrice: 100,
    offerPrice: 75,
    description: 'This is a sample product description.',
    images: [
      'https://via.placeholder.com/50',
      'https://via.placeholder.com/50',
      'https://via.placeholder.com/50',
      'https://via.placeholder.com/300'
    ]
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    
    alert("Product added to cart")
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-images">
        <div className="small-images">
          {product.images.slice(0, 3).map((img, index) => (
            <img key={index} src={img} alt={`Product view ${index + 1}`} className="small-image" />
          ))}
        </div>
        <div className="main-image">
          <img src={product.images[3]} alt="Product main view" />
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="real-price">${product.realPrice}</p>
        <p className="offer-price">${product.offerPrice}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Shop;

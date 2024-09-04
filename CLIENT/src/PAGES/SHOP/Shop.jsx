import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from '../../CONTEXT/ShopContext';
import { FaHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa'; // Importing icons
import './Shop.css';

const Shop = () => {
  const { productId } = useParams(); // Get the productId from URL params
  const { products } = useShop(); // Get products from context
  const [quantity, setQuantity] = useState(1);

  // Find the product based on productId
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert("Product added to cart");
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleAddToWishlist = () => {
    alert("Product added to wishlist");
    console.log(`Added ${product.name} to wishlist`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt="Product main view" />
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">
            {product.description}
            <br />
            <strong>Introduction:</strong> Our versatile accent chair is perfect for any space, from dining rooms to cafes. This chair is built to last with its strong steel frame. The high tensile velvet fabric provides ultimate relaxation while the powder-coated steel legs add a sleek finish.
            <br />
            <strong>Specifications:</strong>
            <br />
            - Stock: 20
            <br />
            - Color: Black
            <br />
            - Size: Various sizes available
            <br />
            - Weight: Lightweight
          </p>
          {product.discountPrice ? (
            <>
              <p className="real-price">${product.price}</p>
              <p className="offer-price">${product.discountPrice} - Save ${product.price - product.discountPrice}</p>
            </>
          ) : (
            <p className="real-price">${product.price}</p>
          )}
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className="buttons-container">
            <button className="add-to-wishlist" onClick={handleAddToWishlist}>
              <FaHeart /> Add to Wishlist
            </button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

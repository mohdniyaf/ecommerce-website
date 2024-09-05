import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import './Shop.css';

const Shop = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data from the backend using the productId
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/admin/productSingleView/${productId}`);
        setProduct(response.data);
        console.log("data received", product);
      } catch (err) {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  const handleAddToCart = () => alert(`${quantity} of ${product.name} added to cart`);
  const handleAddToWishlist = () => alert(`${product.name} added to wishlist`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !product) {
    return <p>{error || 'Product not found'}</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-images">
          <img src={`http://localhost:3000/${product.images[0].url}`} alt={product.name} className="main-image"/>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="real-price">${product.price}</p>
          {product.offerPrice && (
            <p className="offer-price">Discount Price: ${product.offerPrice}</p>
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
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

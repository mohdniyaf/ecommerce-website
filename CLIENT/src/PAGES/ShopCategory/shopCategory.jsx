import React, { useEffect, useState } from 'react';
import Item from '../../COMPONENTS/ITEM/Item';
import './shopCategory.css';

const ShopCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/admin/allProducts');
        const data = await response.json();
        
        setProducts(data); // No category filter, just fetching all products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Fetch products once when the component mounts

  return (
    <div>
      <div className="shop-gallery">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map(product => (
            <Item
              key={product._id}
              id={product._id}
              image={product.images[0].url}  // Make sure the image path is correct
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Store/cartReducer';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get('https://dummyjson.com/products');
        console.log(productResponse.data);
        setProducts(productResponse.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

 

  
  const handleClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
     
      
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div onClick={() => handleClick(product.id)}>
              <img src={product.thumbnail} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
            </div>
            <button className="rotate-button" onClick={() => handleAddToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    
  );
};

export default Product;

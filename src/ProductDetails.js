import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    quantity: 1, // Default quantity
    price: 0, // Default price
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(response.data);
        setProduct(response.data);
        // Set the default price when the product data is fetched
        setFormData(prevState => ({ ...prevState, price: response.data.price }));
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-images">
        <h3>Images:</h3>
        <div className="image-container">
          <button className="prev-button" onClick={handlePrevImage}>Previous</button>
          <img src={product.images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
          <button className="next-button" onClick={handleNextImage}>Next</button>
        </div>
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Discount Percentage:</strong> {product.discountPercentage}%</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <button onClick={handleOrderClick}>Order</button>
        {showOrderForm && (
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
            <label>Quantity:</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
            <button type="submit">Place Order</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

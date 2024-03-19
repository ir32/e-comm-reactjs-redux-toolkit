import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './Store/cartReducer';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');

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

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocationName, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  function showLocationName(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.display_name) {
          var locationName = data.display_name;
          //alert("Location: " + locationName);
          setResponse("Location: " + locationName);

        } else {
          alert("Failed to fetch location name.");
        }
      })
      .catch(error => {
        console.error('Error fetching location name:', error);
        alert("An error occurred while fetching location name.");
      });
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  const handleClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <div> 
      <div style={{marginTop : '30px'}}>
      <button onClick={getLocation} className='btn btn-primary btn-sm' style={{ width: '10%' }}>Location</button>
        <span >{response}</span>

      </div>
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
    </div>
  );
};

export default Product;

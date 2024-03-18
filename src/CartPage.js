import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Store/cartReducer'; 

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch(); 
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId })); 
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <div className="product-container">
        {cart.map(item => (
          <div className="product-card" key={item.id}>
            <div>
              <img src={item.thumbnail} alt={item.title} className="product-image" />
            </div>
            <div className="product-details">
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Brand:</strong> {item.brand}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              {/* Add more details as needed */}
            </div>
            <button className="rotate-button" onClick={() => handleRemoveFromCart(item.id)}>Remove From Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;

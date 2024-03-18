import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Store/cartReducer'; 

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch(); 
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId })); 
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
      
      <div>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2> {/* Display total price */}
        <button className="proceed-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Price:</strong> ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;

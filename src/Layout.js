import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook
import './Layout.css'; // Import CSS file for styling

const Layout = () => {
  // Access the cart state from Redux
  const cart = useSelector(state => state.cart);

  // Calculate the total number of items in the cart
  const cartItemCount = cart.length;

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">Fetch</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link">SingUp</Link>
          </li>
          <li className="nav-item">
            {/* Display the cart count */}
            <Link to="/cart" className="nav-link">Cart ({cartItemCount})</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

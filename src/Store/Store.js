import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'; // Correct import of the cart reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer // Use the cartReducer as the reducer for the cart slice
  }
});

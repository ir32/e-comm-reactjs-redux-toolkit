import './App.css';
import Layout from "./Layout";
import CommentsTable from './CommentsTable';
import Product from './Product';
import Fetch from './Fetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './ProductDetails'; 
import SignupForm from './SignupForm';
import CartPage  from './CartPage'
import { Provider } from 'react-redux'; // Import Provider
import { store } from './Store/Store'; // Import your Redux store

function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CommentsTable />} />
          <Route path="blogs" element={<Fetch />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} /> 
          <Route path="sign-up" element={<SignupForm />} />
          <Route path="cart" element={<CartPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

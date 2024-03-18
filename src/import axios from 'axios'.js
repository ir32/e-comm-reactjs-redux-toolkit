import axios from 'axios'
import React, { useState, useEffect } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        const productdata = async () => {
            try {
                const dataresponses = await axios.get("https://dummyjson.com/products");
                setProducts(dataresponses.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        productdata ();
    },[]);

  return (
    <div>
      <p> other data</p>
      <table>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
  {products.map((product) => (
      <tr key={product.id}>
        <td>{product.brand}</td>
        <td>{product.category}</td>
        <td>{product.description}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default Product

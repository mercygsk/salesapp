import React from 'react'
import { useState } from 'react'
import * as productAPI from '../utilities/product-api.js';
import { useEffect } from 'react';
import ProductDisplay from './ProductDisplay/ProductDisplay.jsx';

function Products({ user, setUser }) {
  const [products, setProducts] = useState([]);

  useEffect(function() {
    async function getProducts() {
      const prds = await productAPI.getAll();
      setProducts(prds);
    }
    getProducts();
  }, []);


  return (
    <><div>
      <h1>Display all available products here</h1>
    </div><ProductDisplay products={products}/></>
  )
}

export default Products
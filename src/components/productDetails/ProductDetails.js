import React from 'react';
import { useProductsStore } from '../../ProductsContext';
import './ProductDetails.css';
import {useObserver } from "mobx-react"

function ProductDetails () {
  const productsStore = useProductsStore();
  return useObserver( () => (

     <div>
      product details
      </div>
  ))};
  export default ProductDetails;
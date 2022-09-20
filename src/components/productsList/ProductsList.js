import React from 'react';
import './ProductsList.css';
import { useProductsStore } from '../../ProductsContext';
import {useObserver } from "mobx-react"

function ProductsList() {
  const productsStore = useProductsStore();
  return useObserver( () => (
    <div>
      available products
      <ul>
          {productsStore.products.map((product) => (
             <li onClick={
             ()=> productsStore.removeProduct(product.id)
             }
              key={(product.id)}>{product.text}</li>
          ))}
        </ul>
      </div>
  ))};
  export default ProductsList;
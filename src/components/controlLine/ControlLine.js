import React, { useState } from 'react';
import { useProductsStore } from '../../ProductsContext';
import './ControlLine.css';

const ControlLine = () => {
  const [productText,setProductText]=useState("")
const productsStore=useProductsStore()
return <div>
       <input value={productText} onChange={(e)=>setProductText(e.target.value)} type="text"></input>
       <button onClick={()=>productsStore.addProduct(productText)}>add</button>
     
      <select>sort by</select>
      </div>
  };
  export default ControlLine;
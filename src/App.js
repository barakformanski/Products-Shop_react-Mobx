import './App.css';
import ControlLine from './components/controlLine/ControlLine.js';
import ProductsList from './components/productsList/ProductsList.js';
import ProductDetails from './components/productDetails/ProductDetails.js';
import { useProductsStore } from './ProductsContext';
 import {useObserver } from "mobx-react"
function App() {
  const productsStore = useProductsStore();
  return useObserver( () => (
    <div className="container">
       <h1 className="headeLine">        
          My Store
        </h1>
        <div className='content'>
      <div className='products-column'>
        <ProductsList/>
        <ControlLine/>
        </div>
        <div className='product-details-column'>
        <ProductDetails/>
    </div>
    </div>
    </div>
  ));
}

export default App;

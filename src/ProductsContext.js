import React from 'react'
import { createProductsStore } from './ProductsStore.ts'
import {useLocalStore} from 'mobx-react'

const ProductsContext= React.createContext(null)

export const ProductsProvider=({children}) => {
    const productsStore=useLocalStore(createProductsStore)
    
    return<ProductsContext.Provider value={productsStore}>
        {children}
    </ProductsContext.Provider>
}
    export const useProductsStore=() => React.useContext(ProductsContext)

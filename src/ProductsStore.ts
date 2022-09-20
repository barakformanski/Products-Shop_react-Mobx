import {nanoid} from 'nanoid'
import {computed,toJS} from "mobx";
import Product from "./interfaces"


export function createProductsStore():{
    products: Product[],
    addProduct: (text: string) => void,
    removeProduct:(id: string) => void,
    // selectedProduct:Product | string,
    //   setSelectedProduct:(id: string) => void
    }{
    return{
        products:[{text:"Book",id:nanoid()}],
        addProduct(text:string){     
            console.log(text,toJS(this.products));       
            this.products.push({
                text,id:nanoid()
            })
        },
        removeProduct(id:string){
            this.products=this.products.filter(product=>product.id!=id)
        },
        // selectedProduct:this.products.length?this.products[0].text:"d",
        // setSelectedProduct(id: string){
        //     this.selectedProduct=this.products.filter(product=>product.id==id)
        // }
    }
}
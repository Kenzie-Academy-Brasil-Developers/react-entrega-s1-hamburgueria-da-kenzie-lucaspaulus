import { useState } from "react"
import './index.css'
import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import Cart from "../../components/Cart"
export default function Shop({products,setProducts}){

    const [filteredProducts, setFilteredProducts] = useState([])
    const [productToRender, setProductToRender] = useState([])
 
    return(
        <section className="Shop">
            <Header products={products} setProducts={setProducts} setFilteredProducts={setFilteredProducts}/>
            <section className="Shop__window">
                <ProductsList products={products}  filteredProducts={filteredProducts} 
                productToRender={productToRender} setProductToRender={setProductToRender}/>
                <Cart productToRender={productToRender} setProductToRender={setProductToRender}/>
            </section>
            
        </section>
    )
}
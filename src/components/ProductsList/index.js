import './index.css'
import Product from '../Product'
export default function ProductsList({products, filteredProducts, productToRender, setProductToRender}){

    function addProductToCart(id){
        const productsArray = products.find((product)=> product.id === id)

        const isProductAdded = productToRender.some((product)=> product.id ===  productsArray.id)

        if(!isProductAdded){
            setProductToRender([...productToRender,productsArray])
        }

    }
    return(
        <section className="ProductsList">
            {filteredProducts.length === 0 
                ?
                products.map((product)=>(
                    <Product key={product.id} image={product.img}  name={product.name} 
                    category={product.category} price={product.price} id={product.id} addProductToCart={addProductToCart} />
                ))
                :
                filteredProducts.map((product)=>(
                    <Product key={product.id} image={product.img}  name={product.name} 
                    category={product.category} price={product.price} id={product.id} addProductToCart={addProductToCart} />
                ))
                
            }
            
            
        </section>
    )
}
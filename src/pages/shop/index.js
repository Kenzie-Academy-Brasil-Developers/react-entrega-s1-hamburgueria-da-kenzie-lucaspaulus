import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import Cart from "../../components/Cart"

export default function Shop(){
    return(
        <section className="Shop">
            <Header/>
            <section className="Shop__window">
                <ProductsList/>
                <Cart/>
            </section>
            
        </section>
    )
}
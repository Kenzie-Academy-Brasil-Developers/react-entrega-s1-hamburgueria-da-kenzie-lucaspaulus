import logo from './logoHamburgueriaKenzie.svg'
import './index.css'
import Search from '../Search'
export default function Header({products, setFilteredProducts}){
    return(
        <header className="Shop-Header">
            <nav className='Shop-Header__nav'>
                <img className='Shop-Header__logo' src={logo} alt='logo da hamburgueria kenzie'/>
                <div className='Shop-Header__search'>
                     <Search products={products} setFilteredProducts={setFilteredProducts}/>
                </div>
                
            </nav>

            
        </header>
    )
}
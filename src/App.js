import './styles/colorsAndFonts.css'
import './App.css';
import {useState, useEffect} from 'react'
import Shop from './pages/shop';
function App() {

  const [products, setProducts] = useState([])
  //const [filteredProducts, setFilteredProducts] = useState([]);
  //const [currentSale, setCurrentSale] = useState([])
  //const [cartTotal, setCartTotal] = useState(0)
  useEffect(()=>{
      fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response)=> response.json())
      .then((response)=> setProducts(response))
  },[])

  console.log(products)
  return (
    <div className="App">
        <Shop/>
    </div>
  )
}

export default App;

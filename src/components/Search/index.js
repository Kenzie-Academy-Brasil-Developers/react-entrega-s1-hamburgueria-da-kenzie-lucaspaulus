// --filtrar produtos--
// lista de produtos
// filtrar com o find

//--o que fazer com o valor filtrado:
// guardar em useState
// 

import { useState } from 'react'
import './index.css'
export default function Search({products,setFilteredProducts}) {
    const [searchedItem, setSearchedItem] = useState("")

    function showProducts() {
        const produtosFiltered = products.filter((items)=> items.name.toLowerCase().includes(searchedItem.toLowerCase()))
        setFilteredProducts(produtosFiltered)

    }
    return(
        <>
            <input value={searchedItem} onChange={(event)=> setSearchedItem(event.target.value)} className='Shop-Header__search-input' 
            type="text" placeholder='Digitar Pesquisa'></input>
            <button onClick={()=> showProducts()} className="Shop-Header__search-btn">Pesquisar</button>
        </>
    )
}
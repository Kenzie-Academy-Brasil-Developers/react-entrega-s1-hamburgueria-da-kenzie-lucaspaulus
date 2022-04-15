import './index.css'
export default function Product({image, name, category, price, id, addProductToCart}){

    const valueBrlFormat = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return(
        <div className="Product">
            <div className="Product__header"> 
                <img className="Product__img" src={image}></img>
            </div>
            <div className='Product__footer'>
                <p className="Product__title">{name}</p>
                <p className="Product__description">{category}</p>
                <p className="Product__value">{valueBrlFormat}</p>
                <button onClick={(event)=> addProductToCart(id)} className="Product__btn">Adicionar</button>
            </div>
        </div>
    )
}
import './index.css'
export default function Cart({productToRender, setProductToRender}){
    function removeOneCard(incardItem){
        
        const productRemoved = productToRender.filter((item)=> item !== incardItem)
        setProductToRender(productRemoved)
    }

    function removeAllCard(){
        setProductToRender([])
    }
    return(
        <section className="Cart">
            <div className='Cart__header'>
                <p className="Cart__title">Carrinho de compras</p>
            </div>
            <div className='Cart__footer'>

               {productToRender.length === 0
                    ?
                    <div className='Cart__empty'>
                        <p className='Cart__info-title'>Sua sacola está vazia</p>
                        <p className='Cart__info-subtitle'>Adicione itens</p>
                    </div>
                    :
                    <div className='Cart__cartWithItem'>
                        <div className='Cart__card-container'>
                            {
                                productToRender.map((product)=> (
                                    <div key={product.id} className="Cart__card">
                                        <div className='Cart__card-image-bg'>
                                            <img className='Cart__card-image' src={product.img}></img>
                                        </div>
                                        <div className='Cart__card-info'>
                                            <p className='Cart__card-name'>{product.name}</p>
                                            <p className='Cart__card-category'>{product.category}</p>
                                        </div>
                                        <span onClick={()=>removeOneCard(product)} className='Cart__card-btn-remove'>Remover</span>
                                    </div>
                                    
                                    
                                ))
                            }
                        </div>
                      

                        <div className='Cart__total'>
                            <div className='Cart__total-header'>
                                <p className='Cart__total-title'>Total</p>
                                <p className='Cart__total-value'>{
                                    productToRender.reduce((acc, valueAtual)=> {
                                        
                                        const valor = acc + parseFloat(valueAtual.price)
                                        return valor
                                    
                                    },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                                }
                                </p>
                            </div>
                            <div className='Cart__total-footer'>
                                <button onClick={()=> removeAllCard()} className='Cart__total-btn'>Remover Todos</button>
                            </div>
                        </div>
                    </div>

                   
                       

                    }
            </div>
            
        </section>
    )
}
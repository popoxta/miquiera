import {useParams} from "react-router-dom";
import {products} from "../products.js";
import {addToCart} from "../utils.js";
import {CartContext} from "../context.jsx";
import {useContext, useState} from "react";

export default function Product() {
    const params = useParams()
    const {cart, setCart} = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false)

    function displayAddedText(){
        setIsAdded(true)
        setTimeout(()=> {
            setIsAdded(false)
        }, 500)
    }

    const product = products.find(prod => prod.id === +params.id)

    return (
        <div className={'product-wrapper'}>
            <img src={product.image} className={'product-img'} alt={product.name}/>

            <div className={'product-description'}>
                <h1>{product.name}</h1>
                <h3>${product.price} + GST</h3>
                <p>{product.description}</p>

                <button className={'fake-btn'} onClick={() =>{
                    displayAddedText()
                    addToCart(cart, setCart, product)
                }}>
                    {isAdded ? 'added' : 'add to cart'}
                </button>
            </div>
        </div>
    )
}
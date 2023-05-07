import {useParams} from "react-router-dom";
import {products} from "../products.js";

export default function Product() {
    const params = useParams()
    const product = products.find(prod => prod.id === +params.id)

    function addToCart() {
        const oldCart = JSON.parse(localStorage.getItem('cart')) ?? {cart: []}
        
        const index = oldCart.cart.findIndex(item => item.id === product.id)

        const productInCart = index >= 0
            ? {...oldCart.cart[index], amount: oldCart.cart[index].amount + 1}
            : {id: product.id, name: product.name, amount: 1}

        const newCart = {
            ...oldCart,
            cart: [
                ...oldCart.cart.filter(item => item.id !== productInCart.id),
                productInCart
            ]
        }
        console.log(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    return (
        <div className={'product-wrapper'}>
            <img src={product.image} className={'product-img'} alt={product.name}/>

            <div className={'product-description'}>
                <h1>{product.name}</h1>
                <h3>${product.price} + GST</h3>
                <p>{product.description}</p>
                <h3 onClick={addToCart}>add to cart</h3>
            </div>
        </div>
    )
}
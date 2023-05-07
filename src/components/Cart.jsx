import {products} from "../products.js";
import {addToCart, removeFromCart} from "../utils.js";
import {useLocation} from "react-router-dom";
import {useState} from "react";

export default function Cart({cart, setCart, showCart, setShowCart}) {

    const cartProducts = cart.cart.sort((a, b) => a.id - b.id).map(item => {

        const productData = products.find(prod => prod.id === +item.id)

        function handleIncrement(e, prod){
            e.stopPropagation()
            addToCart(cart, setCart, prod,  1)
        }

        function handleDecrement(e, prod){
            e.stopPropagation()
            if (prod.amount <= 1) return
            addToCart(cart, setCart, prod, -1)
        }

        function handleDelete(e, prod){
            e.stopPropagation()
            removeFromCart(cart, setCart, prod)
        }

        return (
            <div key={productData.name} className={'cart-item'}>
                <img className={'cart-image'} alt={productData.name} src={productData.image}/>
                <div className={'cart-info'}>
                    <h4>{productData.name}</h4>
                    <div className={'cart-quantity'}>
                        <p>quantity</p>
                        <button onClick={e=> handleDecrement(e, item)}>-</button>
                        <p>{item.amount}</p>
                        <button onClick={e=> handleIncrement(e, item)}>+</button>
                    </div>
                    <p><span>${item.amount * productData.price} + GST</span></p>
                    <button onClick={e=> handleDelete(e, item)}>x</button>
                </div>
            </div>
        )
    })

    const totalItems = cart.cart.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)

    // this is less performant (O(n^2)) however the dataset is minimal
    const totalCost = cart.cart.reduce((acc, item) => {
        const price = products.find(prod => prod.id === +item.id).price
        return acc + (item.amount * price)
    }, 0)

    function hideCart(){
        setShowCart(false)
    }

    return (
        <div className={showCart ? 'cart-bg' : 'cart-bg hidden'} onClick={hideCart}>

            <div className={'cart'} onClick={e => e.stopPropagation()}>

                <div className={'cart-head'}>
                    <h1>SHOPPING CART</h1>
                </div>

                <div className={'cart-products'}>
                    {cartProducts}
                </div>

                <div className={'cart-summary'}>
                    <div className={'cart-units'}>
                        <h4>Units</h4>
                        <h4>{totalItems}</h4>
                    </div>
                    <hr/>
                    <div className={'cart-total'}>
                        <h4>Total <span>(inc GST)</span></h4>
                        <h4>${(totalCost * 1.15).toFixed(2)}</h4>
                    </div>

                    <div className={'cart-buttons'}>

                        <button className={'gr-btn'}>continue shopping</button>
                        <button className={'gr-btn'}>checkout</button>

                    </div>
                </div>

            </div>

        </div>
    )
}
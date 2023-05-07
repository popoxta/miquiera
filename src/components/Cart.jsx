import {products} from "../products.js";
import {addToCart, removeFromCart} from "../utils.js";
import {CartContext} from "../context.jsx";
import {useContext} from "react";


export default function Cart() {
    const {showCart, setShowCart, cart, setCart} = useContext(CartContext)

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

                        <button className={'circle-btn'} id={'decrement-btn'}
                                onClick={e=> handleDecrement(e, item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M200 606v-60h560v60H200Z"/>
                            </svg>
                        </button>

                        <p>{item.amount}</p>

                        <button className={'circle-btn'} id={'increment-btn'}
                                onClick={e=> handleIncrement(e, item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/>
                            </svg>
                        </button>

                    </div>
                    <p><span>${item.amount * productData.price} + GST</span></p>

                    <button className={'circle-btn delete-btn'} id={'delete-btn'}
                            onClick={e=> handleDelete(e, item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
                        </svg>
                    </button>

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
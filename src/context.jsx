import {createContext, useEffect, useState} from "react";
import usePersistedValue from "./utils.js";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cart, setCart] = usePersistedValue('cart', {cart: []})

    useEffect(()=> {
        if (showCart) document.body.classList.add('disable-scroll')
        else document.body.classList.remove('disable-scroll')
    }, [showCart])

    const value = {showCart, setShowCart, cart, setCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider

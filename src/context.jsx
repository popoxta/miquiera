import {createContext, useState} from "react";
import usePersistedValue from "./utils.js";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cart, setCart] = usePersistedValue('cart', {cart: []})

    const value = {showCart, setShowCart, cart, setCart}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider

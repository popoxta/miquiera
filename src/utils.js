import {useEffect, useState} from "react";

export default function usePersistedValue(key, defaultValue){
    const [value, setValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        return value ? (JSON.parse(value)) : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export function addToCart(cart, setCart, product, amount=1) {

    const index = cart.cart.findIndex(item => item.id === product.id)

    const productInCart = index >= 0
        ? {...cart.cart[index], amount: cart.cart[index].amount + amount}
        : {id: product.id, name: product.name, amount: 1}

    const newCart = {
        cart: [
            ...cart.cart.filter(item => item.id !== productInCart.id),
            productInCart
        ]
    }
    setCart(newCart)
}

export function removeFromCart(cart, setCart, product) {
    const newCart = {cart: cart.cart.filter( item => item.id !== product.id )}
    setCart(newCart)
}
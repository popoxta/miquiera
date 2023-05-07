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

export function addToCart(cart, setCart, product) {
    const oldCart = {...cart}

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
    setCart(newCart)
}
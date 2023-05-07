import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Image from "./Image.jsx";
import Header from "./Header.jsx";
import usePersistedValue from "../utils.js";
import {useState} from "react";

export default function Layout() {
    const atHome = useLocation().pathname === '/'
    const [cart, setCart] = usePersistedValue('cart', {cart: []})
    const [showCart, setShowCart] = useState(true)

    return (
        <div className={'site-wrapper'}>
            {atHome && <Image/>}

            <div className={'content'}>
                <Header atHome={atHome} cart={cart} setShowCart={setShowCart}/>

                <Outlet context={{cart, setCart}}/>

                <Cart cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart}/>
            </div>
            <Footer/>
        </div>
    )
}

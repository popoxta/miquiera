import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Image from "./Image.jsx";
import Header from "./Header.jsx";
import usePersistedValue from "../utils.js";

export default function Layout() {
    const atHome = useLocation().pathname === '/'
    const [cart, setCart] = usePersistedValue('cart', {cart: []})

    return (
        <div className={'site-wrapper'}>
            {atHome && <Image/>}

            <div className={'content'}>
                <Header atHome={atHome} cart={cart}/>
                <Outlet context={{cart, setCart}}/>
                <Cart context={{cart, setCart}}/>
            </div>
            <Footer/>
        </div>
    )
}

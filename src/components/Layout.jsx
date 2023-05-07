import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Image from "./Image.jsx";
import Header from "./Header.jsx";

export default function Layout() {
    const atHome = useLocation().pathname === '/'

    return (
        <div className={'site-wrapper'}>
            <Cart/>
            {atHome && <Image/>}
            <div className={'content'}>
                <Header atHome={atHome}/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

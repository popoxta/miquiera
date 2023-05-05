import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Cart from "./cart.jsx";
import Image from "./image.jsx";
import Home from "../pages/home.jsx";

export default function Layout(){
    return(
        <div className={'body'}>
            <Image />
            <Header title={false}/>
            <Home />
            <Cart />
            <Footer/>
        </div>
    )
}
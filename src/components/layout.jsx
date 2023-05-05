import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Cart from "./cart.jsx";
import Home from "../pages/home.jsx";
import Image from "./image.jsx";

export default function Layout(){
    return(
        <div className={'body'}>
            <Image />
            <Header title={false}/>

            <Cart />
            <Footer/>
        </div>
    )
}
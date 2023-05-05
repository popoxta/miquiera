import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Cart from "./cart.jsx";

export default function Layout(){
    return(
        <div className={'body'}>
            <Header/>
            <Cart />
            <Footer/>
        </div>
    )
}
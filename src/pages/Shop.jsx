import {products} from "../products.js";
import {addToCart} from "../utils.js";
import {CartContext} from "../context.jsx";
import {useContext} from "react";
import ProductTile from "../components/ProductTile.jsx";

export default function Shop() {
    const {cart, setCart} = useContext(CartContext)

    function handleAddToCart(prod){
        addToCart(cart, setCart, prod)
    }

    const allProducts = products.map(prod =>
        <ProductTile key={prod.name} prod={prod} onClick={()=> handleAddToCart(prod)}/>
    )

    return (
        <div className={'shop-wrapper'}>
            {allProducts}
        </div>
    )
}
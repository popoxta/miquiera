import {products} from "../products.js";
import {Link} from "react-router-dom";
import {addToCart} from "../utils.js";
import {CartContext} from "../context.jsx";
import {useContext} from "react";

export default function Shop() {
    const {cart, setCart} = useContext(CartContext)

    const allProducts = products.map(prod =>

        <div key={prod.id} className={'product-tile'}>
            <Link className={'wrapper'} to={`${prod.id}`}>
                <img src={prod.image} alt={prod.name} className={'tile-img'}/>
                <h2>{prod.name}</h2>
                <hr/>
                <p>${prod.price} + GST</p>
            </Link>

            <button className={'gr-btn'}
                    onClick={() => {
                        addToCart(cart, setCart, prod)
                        console.log(cart)
                    }}>
                add to cart
            </button>
        </div>
    )

    return (
        <div className={'shop-wrapper'}>
            {allProducts}
        </div>
    )
}
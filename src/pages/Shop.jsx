import {products} from "../products.js";
import {Link} from "react-router-dom";

export default function Shop() {
    const allProducts = products.map(prod =>

        <Link key={prod.id} to={`${prod.id}`}>
            <div className={'product-tile'}>

                <img src={prod.image} alt={prod.name} className={'tile-img'}/>
                <h2>{prod.name}</h2>
                <hr/>
                <p>${prod.price} + GST</p>
                <button className={'gr-btn'}>add to cart</button>

            </div>
        </Link>
    )

    return (
        <div className={'shop-wrapper'}>
            {allProducts}
        </div>
    )
}
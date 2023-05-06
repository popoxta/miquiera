import {products} from "../products.js";
import {Link} from "react-router-dom";

export default function Shop() {
    const allProducts = products.map(prod =>

        <div key={prod.id} className={'product-tile'}>
            <Link className={'wrapper'} to={`${prod.id}`}>
                <img src={prod.image} alt={prod.name} className={'tile-img'}/>
                <h2>{prod.name}</h2>
                <hr/>
                <p>${prod.price} + GST</p>
            </Link>

            <button className={'gr-btn'}>add to cart</button>
        </div>
    )

    return (
        <div className={'shop-wrapper'}>
            {allProducts}
        </div>
    )
}
import {products as productData} from "../products.js";

export default function Shop() {
    const availableProducts = productData

    const products = availableProducts.map(prod =>
        <div className={'product-tile'} key={prod.id}>


                <img src={prod.image} alt={prod.name} className={'tile-img'}/>
            <h2>{prod.name}</h2>
            <hr/>
            <p>${prod.price} + GST</p>

            <button className={'gr-btn'}>add to cart</button>
        </div>
    )



    return (
        <div className={'shop-wrapper'}>
            {products}
        </div>
    )
}
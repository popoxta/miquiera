import {products} from "../products.js";

export default function Shop(){
    const shopProducts = products
    const tesProd = products[0]

    const product = (
        <div className={'product-tile'}>

            <div className={'tile-img-wrapper'}>
                <img src={tesProd.image} alt={tesProd.name} className={'tile-img'}/>
            </div>

            <h2>{tesProd.name}</h2>
            <p>${tesProd.price} + GST</p>

            <button className={'gr-btn'}>add to cart</button>
        </div>
    )

    return (
        <div className={'shop-wrapper'}>
            {product}
        </div>
    )
}
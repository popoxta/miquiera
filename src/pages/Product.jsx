import {useParams} from "react-router-dom";
import {products} from "../products.js";

export default function Product() {
    const params = useParams()
    const product = products.find(prod => prod.id === +params.id)

    return (
        <div className={'product-wrapper'}>
            <img src={product.image} className={'product-img'} alt={product.name}/>

            <div className={'product-description'}>
                <h1>{product.name}</h1>
                <h3>${product.price} + GST</h3>
                <p>{product.description}</p>
                <h3>add to cart</h3>
            </div>
        </div>
    )
}
import {Link} from "react-router-dom";
import {useState} from "react";


export default function ProductTile({prod, onClick}){
    const [isAdded, setIsAdded] = useState(false)

    function displayAddedText(){
        setIsAdded(true)
        setTimeout(()=> {
            setIsAdded(false)
        }, 500)
    }

    return (
        <div className={'product-tile'}>
            <Link className={'wrapper'} to={`${prod.id}`}>
                <img src={prod.image} alt={prod.name} className={'tile-img'}/>
                <h3>{prod.name}</h3>
                <hr/>
                <p>${prod.price} + GST</p>
            </Link>

            <button className={'gr-btn'} onClick={()=> {
                onClick()
                displayAddedText()
            }}>
                {isAdded ? 'added' : 'add to cart'}
            </button>
        </div>
    )
}

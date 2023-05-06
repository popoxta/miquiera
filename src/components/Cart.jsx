export default function Cart() {
    return (
        <div className={'cart-bg'}>

            <div className={'cart'}>

                <div className={'cart-head'}>
                    <h1>SHOPPING CART</h1>
                </div>

                <div className={'cart-products'}>
                    <p>product</p>
                </div>

                <div className={'cart-summary'}>
                    <div className={'cart-units'}>
                        <h4>Units</h4>
                        <h4>#num</h4>
                    </div>
                    <hr/>
                    <div className={'cart-total'}>
                        <h4>Total <span>(inc GST)</span></h4>
                        <h4>#num</h4>
                    </div>

                    <div className={'cart-buttons'}>

                        <button className={'gr-btn'}>continue shopping</button>
                        <button className={'gr-btn'}>checkout</button>

                    </div>
                </div>

            </div>

        </div>
    )
}
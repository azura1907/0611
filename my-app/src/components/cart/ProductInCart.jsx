const ProductInCart = (props) => {

    const { cartItem, changeQuantity } = props

    return <div className="card my-5">
        <div className="card-body d-flex">
            <div className="card-image">
                <img style={{ maxHeight: '200px', marginRight: '10px' }} src={cartItem.image} />
            </div>

            <div className="card-information">
                <h3>
                    {cartItem.productName}
                </h3>
                <p>
                    {cartItem.price}
                </p>

                <p>
                    <button onClick={() => changeQuantity(cartItem, -1)} className="btn btn-primary">
                        -
                    </button>
                    <span className="d-inline-block mx-3">
                        {cartItem.quantity}
                    </span>
                    <button onClick={() => changeQuantity(cartItem, 1)} className="btn btn-primary">
                        +
                    </button>
                </p>
            </div>
        </div>
    </div>
}

export default ProductInCart;
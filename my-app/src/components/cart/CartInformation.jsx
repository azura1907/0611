import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartInformation = () => {

    const { cart } = useContext(CartContext)

    let totalProducts = 0;
    let totalPrice = 0;

    cart.forEach((cartItem) => {
        totalProducts += cartItem.quantity
        totalPrice += cartItem.quantity * Number(cartItem.price)
    })

    return <>
        <h1>
            Total:
        </h1>
        <hr />
        <div className="card">
            <div className="card-body">
                <h3>
                    Total Products: {totalProducts}
                </h3>

                <h3>
                    Discount:
                </h3>

                <h3>
                    Ship cost:
                </h3>
            </div>
        </div>

        <h2 className="mt-2">
            Total price: {totalPrice}
        </h2>
    </>
}

export default CartInformation;
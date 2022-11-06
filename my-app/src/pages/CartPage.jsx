import CartInformation from "../components/cart/CartInformation";
import ProductInCart from "../components/cart/ProductInCart";
import ListProductInCart from "../components/cart/ListProductInCart";

function CartPage() {
    return (
        <div className="container">
            <div className="row">
                {/* products in cart */}
                <div className="col-9">
                    <ListProductInCart />
                </div>
                {/* cart information */}
                <div className="col-3">
                    <CartInformation />
                </div>
            </div>
        </div>)
}

export default CartPage;
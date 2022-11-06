import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ProductInCart from "./ProductInCart";

const ListProductInCart = () => {

    const cartContextdata = useContext(CartContext)
    const { cart, setCart } = cartContextdata

    const handleQuantityChange = (product, quantity) => {
        const newCart = [...cart]

        //xet xem product da co trong cart hay chua
        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id
        })

        if (productIndex !== -1) {
            if (newCart[productIndex].quantity === 1 && quantity === -1) {
                window.confirm('ban co muon xoa san pham ra khoi gio hang k?')
                newCart.splice(productIndex, 1)
                setCart(newCart)
                return;
            }
            newCart[productIndex].quantity = newCart[productIndex].quantity + quantity
            setCart(newCart)
        }
    }

    return (
        <div>
            {
                cart.map((cartItem) => {
                    return <ProductInCart key={cartItem.id} changeQuantity={handleQuantityChange} cartItem={cartItem} />
                })
            }
        </div>
    )
}

export default ListProductInCart;
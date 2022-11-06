import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartContext from "../../context/CartContext"

const Product = (props) => {

    const { product } = props
    const cartContextdata = useContext(CartContext)
    const { cart, setCart } = cartContextdata
    const navigate = useNavigate()


    const handleAddToCart = (event) => {
        event.preventDefault()
        // tao cart moi
        const newCart = [...cart]

        //xet xem product da co trong cart hay chua

        const productIndex = newCart.findIndex(productElement => {
            return productElement.id === product.id
        })

        if (productIndex !== -1) {
            newCart[productIndex].quantity = newCart[productIndex].quantity + 1
            alert('added to cart')
            return
        }

        const newCartProduct = {
            ...product,
            quantity: 1
        }

        newCart.push(newCartProduct)
        setCart(newCart)
        alert('added to cart')
        console.log(cartContextdata.cart)

        navigate("/cart")
    }


    return (
        <div className="col-3 mb-5">
            <div className="card">
                <img className="card-img-top" src={product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">{product.price}$</p>
                    <a href="#" onClick={handleAddToCart} className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div >
    )
}

export default Product
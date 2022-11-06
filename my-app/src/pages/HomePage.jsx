import ProductList from "../components/products/ProductList";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import API_URL from '../utils'

const HomePage = () => {

    const [productList, setProductList] = useState([])
    const handleFetchData = async () => {
        try {
            const productsData = await axios.get(`${API_URL}/products`)
            setProductList(productsData.data)
            console.log(productsData)
        } catch (error) {
            console.log('handle fetch data', error)
        }
    }
    useEffect(() => {
        handleFetchData()
    }, [])

    return (
        <div className="container" >
            <p>Home Page</p>
            <ProductList products={productList} />
        </div >)
}

export default HomePage;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartContext from './context/CartContext';

function App() {

  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      <div className="App">
        <ul className="nav justify-content ms-auto">
          <li className="nav-item">
            <NavLink to='/' end>
              Home
            </NavLink>
          </li>
          <li className="nav-item ms-3">
            <NavLink to='/cart' end>
              Cart
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div >
    </CartContext.Provider >
  );
}

export default App;

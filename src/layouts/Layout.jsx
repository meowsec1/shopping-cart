import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import NavBar from '../components/NavBar/NavBar.jsx'

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevCartItemState =>
        [...prevCartItemState, ...item]
    )
  }

  const removeFromCart = (itemId) => {
    setCartItems(
        prevCartItemState => prevCartItemState.filter(item => item.id !== itemId)
    )
  }

  return (
    <>
      <NavBar numCartItems={cartItems.length}/>
      <Outlet context={{
        cartItems,
        addToCart,
        removeFromCart,
      }}/>
    </>
  )
}

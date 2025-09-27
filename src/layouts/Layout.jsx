import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import NavBar from '../components/NavBar/NavBar.jsx'

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (items) => {
    setCartItems(prevCartItems => {

      let updatedCart = [...prevCartItems];
      
      items.forEach(newItem => {
        const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === newItem.id);
        
        if (existingItemIndex >= 0) {
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity + 1
          };
        } else {
          updatedCart.push({ ...newItem, quantity: 1 });
        }
      });
      
      return updatedCart;
    });
  }

  return (
    <>
      <NavBar numCartItems={cartItems.reduce((acc, item) => acc += item.quantity, 0)}/>
      <Outlet context={{
        cartItems,
        setCartItems,
        addToCart,
      }}/>
    </>
  )
}

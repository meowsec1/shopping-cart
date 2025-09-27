import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style-reset.css'
import './style.css'

import Layout from './layouts/Layout.jsx'

import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'

import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      }

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

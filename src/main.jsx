import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style-reset.css'
import './style.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './router.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

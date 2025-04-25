import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

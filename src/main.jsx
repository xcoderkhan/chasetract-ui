import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' mx-auto max-w-7xl'>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
)

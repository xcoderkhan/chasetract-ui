import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router/Router.jsx'
import AuthProviders from './routes/Auth/AuthProviders/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' mx-auto max-w-7xl'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
)

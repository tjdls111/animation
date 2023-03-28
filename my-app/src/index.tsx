import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import CheckList from './pages/checkList'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <CheckList/>
  }
])

root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)

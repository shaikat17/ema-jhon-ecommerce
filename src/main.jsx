import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Shop from './components/Shop/Shop';
import Oders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Shop/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "orders",
        element: <Oders/>,
        loader: cartProductsLoader
      },
      {
        path: "inventory",
        element: <Inventory/>
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

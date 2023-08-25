// noinspection TypeScriptUnresolvedFunction,TypeScriptCheckImport

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.tsx'
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import AccessProducts from "./pages/AcessProducts/AccessProducts";

import './index.css'
import {CartContextProvider} from "./services/cartService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/carrinho',
        element: <ShoppingCart />
    },
    {
        path: '/acessarprodutos/:id',
        element: <AccessProducts />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CartContextProvider>
          <RouterProvider router={router} />
      </CartContextProvider>
  </React.StrictMode>,
)

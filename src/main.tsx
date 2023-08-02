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
    <RouterProvider router={router} />
  </React.StrictMode>,
)

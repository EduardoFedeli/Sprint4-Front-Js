import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App'
import Home from './routes/Home/Home'
import Error from './routes/Error/Error'
import Produtos from './routes/Produtos/produtos'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/produtos",
      element: <Produtos />
    },
    {
      path: "/antiga",
      element: <Navigate to="/" />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './routes/Home/home'
import Error from './routes/Error/error'
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
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

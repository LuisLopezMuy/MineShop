import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import About from './components/About.jsx'
import Productos from './components/Productos.jsx'
import NotFound from './components/NotFound.jsx';
import Tiendas from './components/Tiendas.jsx';
import Home from './components/Home.jsx';
import Pedidos from './components/Pedidos.jsx';
import Carrito from './components/Carrito.jsx';
import Pago from './components/Pago.jsx';
import Favoritos from './components/Favoritos.jsx';
import Politicas from './components/Politicas.jsx';
import Desarrollador from './components/Desarrollador.jsx';
import Producto from './components/Producto.jsx';
import '../public/styles/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/productos/:slug", element: <Productos /> },
      { path: "/tiendas", element: <Tiendas /> },
      { path: "/pedidos", element: <ProtectedRoute><Pedidos /></ProtectedRoute> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/pago", element: <ProtectedRoute><Pago /></ProtectedRoute> },
      { path: "/acerca", element: <About /> },
      { path: "/favoritos", element: <Favoritos /> },
      { path: "/politicas", element: <Politicas /> },
      { path: "/desarrollador", element: <Desarrollador /> },
      { path: "/producto/:id", element: <Producto /> }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

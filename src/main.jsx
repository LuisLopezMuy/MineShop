import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'
import NotFound from './components/NotFound.jsx';
import Tiendas from './components/Tiendas.jsx';
import Rastrear from './components/Rastrear.jsx';
import Home from './components/Home.jsx';
import Perfil from './components/Perfil.jsx';
import Carrito from './components/Carrito.jsx';
import Pago from './components/Pago.jsx';
import Favoritos from './components/Favoritos.jsx';
import Politicas from './components/Politicas.jsx';
import Desarrollador from './components/Desarrollador.jsx';
import '../public/styles/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/productos/:slug", element: <Products /> },
      { path: "/rastrear", element: <Rastrear /> },
      { path: "/tiendas", element: <Tiendas /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/pago", element: <Pago /> },
      { path: "/acerca", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/favoritos", element: <Favoritos /> },
      { path: "/politicas", element: <Politicas /> },
      { path: "/desarrollador", element: <Desarrollador /> }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

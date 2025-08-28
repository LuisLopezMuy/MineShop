import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'
import NotFound from './components/NotFound.jsx';
import '../public/styles/index.css'


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://prwewpmiakhrrssspgwp.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'YOUR_SUPABASE_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)






const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    errorElement: <NotFound />, 
    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> }


    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// Example: Fetch data from Supabase after app starts
async function fetchTablaPrueba() {
  const { data: tabla_prueba, error } = await supabase
    .from('tabla_prueba')
    .select('*')
  if (error) {
    console.error(error)
  } else {
    console.log(tabla_prueba)
  }
}
fetchTablaPrueba()
  .select('*')
console.log(tabla_prueba)

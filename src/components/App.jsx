import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {

  return (
      <div className='bodyDiv'>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default App

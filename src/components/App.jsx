import { Outlet } from 'react-router-dom'
import '../../public/styles/App.css'
import NavBar from './NavBar'

function App() {

  return (
    <>
      <div className='bodyDiv'>

        <NavBar/>
        <Outlet/>

      </div>
    </>
  )
}

export default App

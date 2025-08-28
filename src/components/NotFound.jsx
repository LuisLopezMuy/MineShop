import { Link } from "react-router-dom"
import NavBar from "./NavBar"

function NotFound(){
    return(
        <div>
            <NavBar/>
            <h1>404 Page not found</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound
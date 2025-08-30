import { Link, useNavigate } from "react-router"
import '../../public/styles/NavBar.css'

function NavBar() {

    const navigate = useNavigate();

    const handleInput = (e) => {
        const value = e.target.value;
        if (value.trim() != "") {
            navigate(`/productos/buscar?q=${encodeURIComponent(value)}`)
        } else {
            navigate("/productos/buscar")
        }
    }

    return (

        <div className="navBar">

            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">

                    <div className="flexDiv">

                        <div className="nav1">

                            <Link className="navbar-brand" to="/">
                                <img src="/logo.png" ></img>
                                <div><span>MineShop</span></div>
                            </Link>


                            <input class="form- control me-2" type="text" placeholder="Busca un producto..." aria-label="Search" onInput={handleInput} />

                            <div className="iconsDiv">

                                <Link to="/perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </Link>

                                <Link to="/carrito">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                    </svg>
                                </Link>

                            </div>
                        </div>

                        <div className="nav2">


                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categorías
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="/productos/tecnologia"> Tecnologia </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/productos/hogar"> Hogar </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <Link className="nav-link" to="/productos/ofertas"> Ofertas </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link className="nav-link" to="/productos/nuevos"> Nuevo Ingreso </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link className="nav-link" to="/tiendas"> Tiendas </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link className="nav-link" to="/rastrear"> Rastrear Pedido </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link className="nav-link" to="/acerca"> Acerca de </Link>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>

        </div>

    )
}

export default NavBar
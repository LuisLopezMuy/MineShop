import { Link } from "react-router"
import '../../public/styles/NavBar.css'

function NavBar() {
    return (

        <div className="navBar">







            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">

                    <div className="flexDiv">

                        <div className="nav1">
                            <a class="navbar-brand" href="#">MineShop</a>
                            <form class="d-flex" role="search">
                                <input class="form- control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="iconsDiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
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
                                            <li><a class="dropdown-item" href="#">Categoría 1</a></li>
                                            <li><a class="dropdown-item" href="#">Categoría 2</a></li>
                                            <li><a class="dropdown-item" href="#">Categoría 3</a></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Ofertas</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Nuevo Ingreso</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Tiendas</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Acerca de</a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>





                </div>

            </nav>















































            <div className="">
                <div className="brandDiv">
                    <img src="https://www.intelaf.com/img/intelaf_logotipo.png" alt="MineShop Logo" className="logo" />
                </div>
                <div className="searchDiv">
                    <span>Búsca un producto...</span>
                </div>
                <div className="iconsDiv"></div>
                <div className="userDiv"></div>

            </div>

            <div className="links">

                <div className="categoriesDiv">
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                </div>

                <div className="otherLinksDiv">
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                    <div className="linkDiv">
                        <Link to="/about"> About </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NavBar
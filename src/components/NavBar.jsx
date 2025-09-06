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
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="flexDiv">


                        <div className="row sec1">

                            <div className="col-6 col-md-4 col-xl-3 order-1">
                                <Link className="navbar-brand " to="/">
                                    <img src="/logo.png" ></img>
                                    <div><span>MineShop</span></div>
                                </Link>
                            </div>

                            <div className="col-12 col-md-5 col-xl-6 order-3 order-md-2">
                                <input className="form-control me-2" type="text" placeholder="🔍 Busca un producto..." aria-label="Search" onInput={handleInput} />
                            </div>

                            <div className="iconsDiv col-6 col-md-3 col-xl-3 order-2 order-md-3">
                                <div className="iconsDiv">
                                    <Link className="nav-link paraEfecto" to="/favoritos">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                    </Link>
                                    <Link className="nav-link paraEfecto" to="/carrito">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg>
                                    </Link>
                                    <Link className="nav-link paraEfecto perfil" to="/perfil">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                        <span>Luis</span>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="sec2 scroll-container">
                            <div className="nav-link">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item paraEfecto2" to="/productos/tecnologia"> Tecnologia </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item paraEfecto2" to="/productos/hogar"> Hogar </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-link paraEfecto">
                                <Link className="nav-link" to="/productos/ofertas"> Ofertas </Link>
                            </div>
                            <div className="nav-link paraEfecto">
                                <Link className="nav-link" to="/productos/nuevos"> Nuevo Ingreso </Link>
                            </div>
                            <div className="nav-link paraEfecto">
                                <Link className="nav-link" to="/tiendas"> Tiendas </Link>
                            </div>
                            <div className="nav-link paraEfecto">
                                <Link className="nav-link" to="/rastrear"> Rastrear Pedido </Link>
                            </div>

                        </div>
    
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar
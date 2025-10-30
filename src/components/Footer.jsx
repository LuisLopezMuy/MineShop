import { Link } from "react-router-dom"

function Footer() {
    return (

        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-secondary" >
                <p className="col-md-4 mb-0 text-body-secondary">© 2025 MineShop S.A.</p>
                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                    <img src="logo.png" alt="Logo MineShop" style={{ width: '30px', height: '30px' }} />
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/acerca" className="nav-link px-2 text-body-secondary">Acerca de</Link> </li>
                    <li className="nav-item"><Link to="/politicas" className="nav-link px-2 text-body-secondary">Políticas</Link></li>
                    <li className="nav-item"><Link to="/desarrollador" className="nav-link px-2 text-body-secondary">Desarrollador</Link></li>
                    <li className="nav-item"><a href="https://wa.link/abcrkh" className="nav-link px-2 text-success" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer
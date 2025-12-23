import { useState } from "react";
import { Link, useNavigate } from "react-router"
import ProductMiniCarrito from "./ProductMiniCarrito";
import '../../public/styles/Carrito.css';


function Carrito() {

    const navigate = useNavigate();

    const [cartData, setCartData] = useState(() => {
        const cart = localStorage.getItem('cartData');
        return cart ? JSON.parse(cart) : []
    })


    return (

        <div className="cart-wrapper">

            <div className="container">
                <div className="row g-4">
                    {// Cart Items Section 
                    }
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Mi Carrito</h4>
                            <span className="text-muted">3 productos</span>
                        </div>

                        {// Product Cards 
                        }
                        <div className="d-flex flex-column gap-3">


                            <ProductMiniCarrito />
                            <ProductMiniCarrito />
                            <ProductMiniCarrito />



                        </div>
                    </div>

                    {// Summary Section 
                    }
                    <div className="col-lg-4">
                        <div className="summary-card p-4 shadow-sm">
                            <h5 className="mb-4">Resumen de Pago</h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Subtotal</span>
                                <span>$479.97</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Descuentos</span>
                                <span className="text-success">$0.00</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Envío</span>
                                <span>$5.00</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold">Total</span>
                                <span className="fw-bold">$458.97</span>
                            </div>


                            <button className="btn btn-primary checkout-btn w-100 mb-3" onClick={() => { navigate("/pago") }} >
                                Proceder al Pago
                            </button>

                            <div className="d-flex justify-content-center gap-2">
                                <i className="bi bi-shield-check text-success"></i>
                                <small className="text-muted">
                                    El pago es seguro
                                    <Link to="/politicas" style={{ textAlign: "center", textDecoration: "underline" }} className="nav-link px-2 text-body-secondary">Ver Políticas</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Carrito

import { useState } from "react";
import { Link, useNavigate } from "react-router"
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
                            {// Product 1 
                            }
                            <div className="product-card p-3 shadow-sm">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src="https://via.placeholder.com/100" alt="Product" className="product-image" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="mb-1">Wireless Headphones</h6>
                                        <p className="text-muted mb-0">Black | Premium Series</p>
                                        <span className="discount-badge mt-2">20% OFF</span>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="quantity-btn" onClick="updateQuantity(1, -1)">-</button>
                                            <input type="number" className="quantity-input" min="1" />
                                            <button className="quantity-btn" onClick="updateQuantity(1, 1)">+</button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="fw-bold">$129.99</span>
                                    </div>
                                    <div className="col-md-1">
                                        <i className="bi bi-trash remove-btn"></i>
                                    </div>
                                </div>
                            </div>

                            {// Product 2 
                            }
                            <div className="product-card p-3 shadow-sm">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src="https://via.placeholder.com/100" alt="Product" className="product-image" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="mb-1">Smart Watch</h6>
                                        <p className="text-muted mb-0">Silver | Series 7</p>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="quantity-btn" onClick="updateQuantity(2, -1)">-</button>
                                            <input type="number" className="quantity-input" min="1" />
                                            <button className="quantity-btn" onClick="updateQuantity(2, 1)">+</button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="fw-bold">$299.99</span>
                                    </div>
                                    <div className="col-md-1">
                                        <i className="bi bi-trash remove-btn"></i>
                                    </div>
                                </div>
                            </div>

                            {// Product 3 
                            }
                            <div className="product-card p-3 shadow-sm">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src="https://via.placeholder.com/100" alt="Product" className="product-image" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="mb-1">Wireless Charger</h6>
                                        <p className="text-muted mb-0">White | 15W Fast Charge</p>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="quantity-btn" onClick="updateQuantity(3, -1)">-</button>
                                            <input type="number" className="quantity-input" min="1" />
                                            <button className="quantity-btn" onClick="updateQuantity(3, 1)">+</button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="fw-bold">$49.99</span>
                                    </div>
                                    <div className="col-md-1">
                                        <i className="bi bi-trash remove-btn"></i>
                                    </div>
                                </div>
                            </div>
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

                            {// Promo Code 
                            }
                            <div className="mb-4">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <button className="btn btn-outline-secondary" type="button">Aplicar</button>
                                </div>
                            </div>

                            <button className="btn btn-primary checkout-btn w-100 mb-3" onClick={() => { navigate("/pago") }} >
                                Proceder al Pago
                            </button>

                            <div className="d-flex justify-content-center gap-2">
                                <i className="bi bi-shield-check text-success"></i>
                                <small className="text-muted">
                                    El pago es seguro
                                    <Link to="/politicas" style={{ textAlign: "center" }} className="nav-link px-2 text-body-secondary">Ver Políticas</Link>
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

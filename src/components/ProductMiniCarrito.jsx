
import { useState } from "react"

function ProductMiniCarrito() {

    const [qty, setQty] = useState(1);


    return (

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
                        <button className="quantity-btn btn-primary" onClick={() => { if (qty > 1) { setQty(qty - 1) } }} >-</button>
                        <input type="number" className="quantity-input" min="1" value={qty} />
                        <button className="quantity-btn" onClick={() => { setQty(qty + 1) }} >+</button>
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

    )
}

export default ProductMiniCarrito

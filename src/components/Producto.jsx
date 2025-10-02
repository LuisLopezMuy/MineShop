import { useParams } from "react-router"

function Producto() {

    const { id } = useParams();


    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    
                    <div className="col-md-6 mb-4">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" />

                    </div>

                    
                    <div className="col-md-6">
                        <h2 className="mb-3">Premium Wireless Headphones</h2>
                        <p className="text-muted mb-4">SKU: WH1000XM4</p>
                        <div className="mb-3">
                            <span className="h4 me-2">$349.99</span>
                            <span className="text-muted"><s>$399.99</s></span>
                        </div>
                        <div className="mb-3">
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                        </div>
                        <p className="mb-4">Experience premium sound quality and industry-leading noise cancellation with these wireless
                            headphones. Perfect for music lovers and frequent travelers.</p>
                        <div className="mb-4">
                            <h5>Color:</h5>
                            <div className="btn-group" role="group" aria-label="Color selection">
                                <input type="radio" className="btn-check" name="color" id="black" autocomplete="off" checked />
                                <label className="btn btn-outline-dark" for="black">Black</label>
                                <input type="radio" className="btn-check" name="color" id="silver" autocomplete="off" />
                                <label className="btn btn-outline-secondary" for="silver">Silver</label>
                                <input type="radio" className="btn-check" name="color" id="blue" autocomplete="off" />
                                <label className="btn btn-outline-primary" for="blue">Blue</label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label for="quantity" className="form-label">Quantity:</label>
                            <input type="number" className="form-control" id="quantity" value="1" min="1" style={{ width: '80px' }} />
                        </div>
                        <button className="btn btn-primary btn-lg mb-3 me-2">
                            <i className="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary btn-lg mb-3">
                            <i className="bi bi-heart"></i> Add to Wishlist
                        </button>
                        <div className="mt-4">
                            <h5>Key Features:</h5>
                            <ul>
                                <li>Industry-leading noise cancellation</li>
                                <li>30-hour battery life</li>
                                <li>Touch sensor controls</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Producto
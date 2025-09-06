import { Link } from "react-router"
import '../../public/styles/ProductMiniHome.css'

function ProductMiniHome() {
    return (
        <Link to={`/producto/1`}>
            <div className="card rounded-4" style={{ width: '14rem' , zIndex: '0'}}>
                <img className="rounded-5   " src="https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg" className="card-img-top" alt="Imagen de producto" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductMiniHome

import { Link } from "react-router"
import '../../public/styles/ProductMiniHome.css'

function ProductMiniHome(props) {
    return (
        <Link to={`/producto/1`}>
            <div className="card rounded-4" style={{ width: props.tamanoCard ? "14rem" : "13rem", zIndex: '0' }}>
                <img src={props.imgURL} className="card-img-top" alt="Imagen de producto" />
                <div className="card-body">


                    <div className="title-div">
                        <p className="card-text card-title">{props.nombre} </p>
                    </div>


                    <div className="adds-div">

                        <div className="flags-div">
                            {props.esOferta && <span class="badge text-bg-danger">OFERTA</span> }
                            {props.esNuevo && <span class="badge text-bg-primary">NUEVO</span> }
                        </div>

                        <div className="price-div">
                            <p className="card-text card-price">{new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(props.precio)} </p>
                        </div>

                    </div>


                </div>
            </div>
        </Link>
    )
}

export default ProductMiniHome

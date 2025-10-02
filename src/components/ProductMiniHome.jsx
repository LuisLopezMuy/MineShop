import { Link } from "react-router"
import { useState } from 'react'
import '../../public/styles/ProductMiniHome.css'

function ProductMiniHome(props) {

    const [likeActive, setLikeActive] = useState(props.likeActive);
    const [cartActive, setCartActive] = useState(props.cartActive);

    function handleLike(e) {
        setLikeActive(!likeActive);
        e.preventDefault();
        const likeData = localStorage.getItem('likeData') ? JSON.parse(localStorage.getItem('likeData')) : [];
        const index = likeData.findIndex(obj => obj === props.id);
        if (index === -1) {
            likeData.push(props.id);
        } else {
            likeData.splice(index, 1);
        }

        localStorage.setItem('likeData', JSON.stringify(likeData));
    }

    function handleCart(e) {
        setCartActive(!cartActive);
        e.preventDefault();
        const cartData = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];
        const index = cartData.findIndex(obj => obj.id === props.id);
        if (index === -1) {
            cartData.push({ id: props.id, cant: 1 });
        } else {
            cartData.splice(index, 1);
        }
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }

    return (
        <Link to={`/producto/${props.id}`}>
            <div className="card rounded-4" style={{ width: props.tamanoCard ? "14rem" : "13rem", zIndex: '0' }}>

                <div className="divImg">
                    <img src={props.imgURL} className="card-img-top" alt="Imagen de producto" />
                    <div className="imgBotones">
                        <p onClick={handleLike} style={{ backgroundColor: likeActive ? 'blue' : 'rgba(88, 131, 231, 0.677' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </p>
                        <p onClick={handleCart} style={{ backgroundColor: cartActive ? 'blue' : 'rgba(88, 131, 231, 0.677' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                            </svg>
                            <span>{cartActive ? '✓' : 'Agregar'}</span>
                        </p>
                    </div>
                </div>

                <div className="card-body">

                    <div className="title-div">
                        <p className="card-text card-title">{props.nombre} </p>
                    </div>

                    <div className="adds-div">

                        <div className="flags-div">
                            {props.esOferta && <span className="badge text-bg-danger">Oferta</span>}
                            {props.esNuevo && <span className="badge text-bg-primary">Nuevo</span>}

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

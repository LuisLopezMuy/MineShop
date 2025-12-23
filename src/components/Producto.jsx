import { useEffect, useState } from "react";
import { useParams } from "react-router";
import supabase from '../supabase/client';
import '../../public/styles/Producto.css';

function Producto() {

    const { id } = useParams();

    const [data, setData] = useState([])
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Productos')
                .select(`id, 
                    nombre, 
                    precio, 
                    descripcion,
                    imagen, 
                    esOferta, 
                    esNuevo,
                    caracteristicas`)
                .eq('id', id)
                .limit(1)

            if (error) {
                console.error('Error al hacer SELECT:', error)
            } else {
                setData(data)
            }
            setLoading(false)
        }

        fetchData()

    }, [])


    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'gray' }}><p>Cargando datos...</p></div>

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-6 mb-4 imgDiv">
                        <img src={data[0].imagen} alt="Imagen del producto" className="img-fluid mb-3 product-image" id="mainImage" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h2 className="mb-3 mt-2 nombre">{data[0].nombre}</h2>

                        <div className="prodFlagsDiv mb-3">
                            {data[0].esOferta && <h3><span className="badge text-bg-danger">Oferta</span></h3>}
                            {data[0].esNuevo && <h3><span className="badge text-bg-primary">Nuevo</span></h3>}
                        </div>

                        <div className="mb-5">
                            <span className="h4 me-2 mb-4 precio">{new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(data[0].precio)}</span>
                        </div>
                        <p className=" descripcion">{data[0].descripcion}</p>
                        <div className="mb-4">

                        </div>

                        <div className="mb-4 cantidadDiv">
                            <span className="">Cantidad:  </span>


                            <div className="col-md-3">
                                <div className="d-flex align-items-center gap-2">
                                    <button className=" quantity-btn btn-primary" onClick={() => { if (qty > 1) { setQty(qty - 1) } }} >-</button>
                                    <input type="number" className="quantity-input" min="1" value={qty} />
                                    <button className="quantity-btn btn-primary" onClick={() => { setQty(qty + 1) }} >+</button>
                                </div>
                            </div>



                        </div>

                        <button className="btn btn-primary btn-lg mb-3 me-2">

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                            </svg>
                            Agregar

                        </button>
                        <button className="btn btn-outline-secondary btn-lg mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>

                            <span className="ml-5">Guardar</span>


                        </button>
                        <div className="mt-4 caracteristicas">
                            <h5>Detalles y Características:</h5>

                            <ul>

                                {data[0].caracteristicas.map((caracteristica, index) => (
                                    <li key={index}>{caracteristica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Producto
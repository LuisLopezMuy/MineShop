import { useEffect, useState } from "react";
import supabase from '../supabase/client'

import ProductMiniHome from "./ProductMiniHome"

function ProductsDiv(props) {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select(`id, 
                    nombre, 
                    precio, 
                    img_url, 
                    es_oferta, 
                    es_nuevo,
                    prods_categs!inner (
                        categorias!inner (
                            nombre
                ))`)
                .ilike('nombre', '%' + props.selection.nombre + '%')
                .ilike('prods_categs.categorias.nombre', props.selection.categoria === "buscar" ? "producto" : props.selection.categoria)

            if (error) {
                console.error('Error al hacer SELECT:', error)
            } else {
                setData(data)
            }
            setLoading(false)
        }

        fetchData()
    }, [props.selection])

    const likeData = JSON.parse(localStorage.getItem('likeData')) || []
    const cartData = JSON.parse(localStorage.getItem('cartData')) || []


    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'gray' }}><p>Cargando datos...</p></div>

    return (

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {data.map(
                (prod) => { return <ProductMiniHome key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imgURL={prod.img_url} esOferta={prod.es_oferta} esNuevo={prod.es_nuevo} tamanoCard={props.tamanoCard} likeActive={likeData.includes(prod.id)} cartActive={cartData.some(item => item.id === prod.id)} /> }
            )}

        </div>
    )
}

export default ProductsDiv
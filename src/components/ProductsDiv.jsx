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

    if (loading) return <p>Cargando datos...</p>

    return (

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {data.map(
                (prod) => { return <ProductMiniHome key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imgURL={prod.img_url} esOferta={prod.es_oferta} esNuevo={prod.es_nuevo} tamanoCard={props.tamanoCard} /> }
            )}

        </div>
    )
}

export default ProductsDiv
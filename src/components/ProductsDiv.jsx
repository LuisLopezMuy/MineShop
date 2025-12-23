import { useEffect, useState } from "react";
import supabase from '../supabase/client';

import ProductMiniHome from "./ProductMiniHome"

function ProductsDiv(props) {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Productos')
                .select(`id, 
                    nombre, 
                    precio, 
                    imagen, 
                    esOferta, 
                    esNuevo,
                    Categorias!inner(
                        nombre
                    )`)
                .ilike('Categorias.nombre', props.selection.categoria === "buscar" ? "%" : props.selection.categoria)
                .or(`nombre.ilike.%${props.selection.nombre}%, etiquetas.ilike.%#${props.selection.nombre}#%`)

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

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'gray' }}><p>Cargando productos...</p></div>

    return (

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {data.map(
                (prod) => {
                    return <ProductMiniHome key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imgURL={prod.imagen}
                        esOferta={prod.esOferta} esNuevo={prod.esNuevo} tamanoCard={props.tamanoCard} likeActive={likeData.includes(prod.id)} cartActive={cartData.some(item => item.id === prod.id)} />
                }
            )}

        </div>
    )
}

export default ProductsDiv
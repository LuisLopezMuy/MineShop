import { useEffect, useState } from "react";
import supabase from '../supabase/client';

import TiendaMini from "./TiendaMini"

function Tiendas() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('tiendas')
                .select(`id, nombre, direccion, horario, telefono, whatsapp`)

            if (error) {
                console.error('Error al hacer SELECT:', error)
            } else {
                setData(data)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'gray' }}><p>Cargando productos...</p></div>

    return (
        <div class="container px-4 py-5" id="hanging-icons">
            <h2 class="pb-2 border-bottom">Nuestras Tiendas</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

                {data.map(
                    (tienda) => {
                        return <TiendaMini key={tienda.id} nombre={tienda.nombre} direccion={tienda.direccion} horario={tienda.horario} telefono={tienda.telefono} whatsapp={tienda.whatsapp} />
                    }
                )}

            </div>
        </div>
    )
}

export default Tiendas
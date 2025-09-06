import { data } from 'react-router';
//import { supabase } from '../supabase/client'
import Filtros from './Filtros';
import ProductsDiv from './ProductsDiv';

function Home() {
    /*                                                                    PRUEBAS DE SUPABASE
        const handleLoad = async () => {
    
            try {
                const { data: tabla_prueba, error } = await supabase
                    .from('tabla_prueba')
                    .select('*')
            } catch (error) {
                console.error("Error fetching data:", error);
            }
    
    
            console.log(supabase)
    
        }
    
    
        handleLoad()
    
    */

    const arrayProductos = [
        {
            id: 1,
            nombre: "Laptop DELL Latitude 3540, core i5, 8GB RAM, 256GB SSD, Windows 11, 14 pulgadas",
            precio: 4999.99,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pRa-Yr-8rm1YVeH1pp5lA5MMCfqG7zNHAQ&s"
        },
        {
            id: 2,
            nombre: "Audífonos Inalámbricos Huawei",
            precio: 999.99,
            esOferta: false,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        },
        {
            id: 3,
            nombre: "Monitor ASUS 50 pulgadas",
            precio: 2500,
            esOferta: true,
            esNuevo: true,
            imgURL: "https://www.officedepot.com.gt/medias/38496.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDMyMTk1fGltYWdlL2pwZWd8YURZeUwyZzNOQzh4TVRZek5UQTROakkyTWpNd01pOHpPRFE1Tmk1cWNHZGZNVEl3TUdaMGR3fDU2ODIyZGNiMmNkOTgzNTI4MTA2Mzg5OGY3ZGYwZWRkYzFmOTQzYThjMzg4YjVhNjQxOWMyYzk3N2RlMDBiYzc"
        },
        {
            id: 4,
            nombre: "Laptop DELL Latitude 3540",
            precio: 4999.99,
            esOferta: false,
            esNuevo: true,
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pRa-Yr-8rm1YVeH1pp5lA5MMCfqG7zNHAQ&s"  
        },
        {
            id: 5,
            nombre: "Audífonos Inalámbricos Huawei",
            precio: 999.99,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        },
        {
            id: 6,
            nombre: "Monitor ASUS 50 pulgadas",
            precio: 2500,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.officedepot.com.gt/medias/38496.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDMyMTk1fGltYWdlL2pwZWd8YURZeUwyZzNOQzh4TVRZek5UQTROakkyTWpNd01pOHpPRFE1Tmk1cWNHZGZNVEl3TUdaMGR3fDU2ODIyZGNiMmNkOTgzNTI4MTA2Mzg5OGY3ZGYwZWRkYzFmOTQzYThjMzg4YjVhNjQxOWMyYzk3N2RlMDBiYzc"
        }
    ]
    const tamanoCard = true;

    return (
        <div className='container-xl mx-auto mt-4'>
            <div className="row">
                <div className="col-12">
                    <ProductsDiv productos={arrayProductos} tamanoCard={tamanoCard} />
                </div>
            </div>
        </div>
    )
}

export default Home



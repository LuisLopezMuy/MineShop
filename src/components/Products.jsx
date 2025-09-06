import { useParams, useSearchParams } from "react-router"
import Filtros from './Filtros';
import ProductsDiv from './ProductsDiv';

function Products(){
    const {slug} = useParams();
    const [serchParams] = useSearchParams();
    const query = serchParams.get("q") || "";

    const arrayProductos = [
        {
            id: 1,
            nombre: "Laptop DELL Latitude 3540",
            precio: 4999.99,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        },
        {
            id: 2,
            nombre: "Audífonos Inalámbricos Huawei",
            precio: 999.99,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        },
        {
            id: 3,
            nombre: "Monitor ASUS 50 pulgadas",
            precio: 2500,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        },
        {
            id: 4,
            nombre: "Laptop DELL Latitude 3540",
            precio: 4999.99,
            esOferta: true,
            esNuevo: false,
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
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
            imgURL: "https://www.steren.com.gt/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg"
        }
    ]
    const tamanoCard = false;


    return(
        <div>
            <h1>Products</h1>
            <h1>{slug}</h1>
            <h1>{query}</h1>
            
        <div className='container-xl mx-auto mt-4'>
            <div className="row">

                <div className="col-3">
                    <Filtros />
                </div>

                <div className="col-9">
                    <ProductsDiv productos={arrayProductos} tamanoCard={tamanoCard} />
                </div>

            </div>
        </div>

        </div>
    )
}

export default Products
import { useParams, useSearchParams } from "react-router"
import Filtros from './Filtros';
import ProductsDiv from './ProductsDiv';

function Products() {
    const { slug } = useParams();
    const [serchParams] = useSearchParams();
    const query = serchParams.get("q") || "";


    return (

        <div className='container-xl mx-auto mt-4'>
            <div className="row">

                <div className="col-12 col-lg-3">
                    <Filtros />
                </div>

                <div className="col-12 col-lg-9">
                    <ProductsDiv selection={{ nombre: query, categoria: slug }} tamanoCard={false} />
                </div>

            </div>
        </div>

    )
}

export default Products
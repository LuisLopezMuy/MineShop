import { useParams, useSearchParams } from "react-router"
import Filtros from './Filtros';
import ProductsDiv from './ProductsDiv';

function Products(){
    const {slug} = useParams();
    const [serchParams] = useSearchParams();
    const query = serchParams.get("q") || "";

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
                    <ProductsDiv />
                </div>

            </div>
        </div>

        </div>
    )
}

export default Products
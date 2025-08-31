import { useParams, useSearchParams } from "react-router"

function Products(){
    const {slug} = useParams();
    const [serchParams] = useSearchParams();
    const query = serchParams.get("q") || "";

    return(
        <div>
            <h1>Products</h1>
            <h1>{slug}</h1>
            <h1>{query}</h1>
            
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
        </div>
    )
}

export default Products
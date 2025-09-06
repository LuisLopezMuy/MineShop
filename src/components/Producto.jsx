import { useParams } from "react-router"

function Producto(){

    const {id} = useParams();


    return(
        <div>
            <h1>Producto {id}</h1>
        </div>
    )
}

export default Producto
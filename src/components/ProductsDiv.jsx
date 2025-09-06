import ProductMiniHome from "./ProductMiniHome"


function ProductsDiv(props) {
    return (



        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>

            {props.productos.map(
                (prod) => { return <ProductMiniHome key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imgURL={prod.imgURL} esOferta={prod.esOferta} esNuevo={prod.esNuevo} tamanoCard={props.tamanoCard} /> }
            )}

        </div>
    )
}

export default ProductsDiv
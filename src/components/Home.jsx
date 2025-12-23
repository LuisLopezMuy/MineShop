import ProductsDiv from './ProductsDiv';

function Home() {

    return (
        <div className='container-xl mx-auto mt-4'>
            <div className="row">
                <div className="col-12">
                    <ProductsDiv selection={{nombre: "%", categoria: "%"}} tamanoCard={true} />
                </div>
            </div>
        </div>
    )
}
export default Home



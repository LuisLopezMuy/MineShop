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

    return (
        <div className='container-xl mx-auto mt-4'>
            <div className="row">
                <div className="col-12">
                    <ProductsDiv />
                </div>

            </div>
        </div>
    )
}

export default Home



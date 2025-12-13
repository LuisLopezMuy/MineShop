import { signInWithGoogle } from '../auth/authService'

function Login() {
    return (

        <div className="container-xl" >
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">

                    <h1 className="mt-5 mb-4" style={{ color: "#3b444aff", fontWeight: 700, textAlign: "center" }} >Inicia sesión para una mejor experiencia</h1>
                    <div style={{ marginTop: "150px", marginBottom: "120px", display: "flex", justifyContent: "center" }}>
                        <button onClick={signInWithGoogle} className='paraEfecto'  style={{ padding:"12px", borderRadius:"12px", border: "none", backgroundColor: "#794ef8ff", color:"white", fontSize: "25px", fontWeight: 600}} >
                            Iniciar sesión con Google
                        </button>
                    </div>
                    <p style={{ fontSize: "18px", marginBottom: "80px" }}>Accede a tu cuenta para guardar tus productos favoritos, realizar compras más rápido, ver el estado de tus pedidos y recibir ofertas exclusivas. Inicia sesión y disfruta de una experiencia de compra personalizada, segura y sin complicaciones.</p>

                </div>
            </div>
        </div>

    )
}

export default Login





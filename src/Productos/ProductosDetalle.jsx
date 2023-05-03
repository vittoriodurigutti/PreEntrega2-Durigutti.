import { useParams, useNavigate } from "react-router-dom"
import data from './../Componentes/ListaProductos.json'
import "./ProductosDetalle.css"

export const ProductosDetalle = ({id}) => {
    const params = useParams ()
    const navigate = useNavigate ()
    const {productId} = params
    const onBack = () => {
        navigate(-1)
    }
    const product = data.find (product => product.id == productId)
return (
    <>
    <button onClick={onBack}>Volver</button>
    <div className="card">
        <div className="cardImage">
            <img src="" alt="" />
        </div>
        <div className="cardBody">
            <h1 className="cardTitle">{product.nombre}</h1>
            <p className="cardText"> Precio: ${product.precio}</p>
            <p className="cardText"> Nos quedan: {product.stock}</p>
        </div>
        
    </div>
    </>
)
}
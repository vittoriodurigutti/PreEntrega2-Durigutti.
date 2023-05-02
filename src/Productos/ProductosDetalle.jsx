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
    <div className="card">
        <div className="cardBody">
            <h5 className="cardTitle">{product.nombre}</h5>
            <p className="cardText"> {product.precio}</p>
            <p className="cardText"> {product.stock}</p>
        </div>
        <button onClick={onBack}>Volver</button>
    </div>
    <h1>Detalle del Producto: {productId}</h1>
    </>
)
}
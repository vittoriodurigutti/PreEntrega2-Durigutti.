import { Link } from 'react-router-dom'
import product_list from './../Componentes/ListaProductos.json'

export const Productos  = () => {
return (
 <>
 <h1> Productos </h1>
 <ul>
    {
        product_list.map( product => (
            <li>
                <Link to={`/products/${product.id}`}>{product.nombre}</Link>
            </li>
        ))
    }
 </ul>
 </>
)
}
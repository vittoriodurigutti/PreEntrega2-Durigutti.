import './Contador.css'
import { useState} from 'react'


export const ItemContador = ({stock, initial, onAdd}) => {
const [quantity, setQuantity] = useState(initial)
const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity+1)
    }
}
const decrement = () => {
    if (quantity < stock) {
        setQuantity(quantity-1)
    }
}

return (
    <div className='agregadorCarrito'>
        <div className='contador'>
            <button className='botonContador' onClick={decrement}> - </button>
            <h3>{quantity}</h3>
            <button  className='botonContador' onClick={increment}> + </button>
        </div>
        <div>
            <button onClick={() => onAdd(quantity)} disabled={!stock} > Agregar al Carrito</button>
        </div>
    </div>

)
}
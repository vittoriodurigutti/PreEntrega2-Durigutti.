//en el array de lista de productos (archivo json) le coloque segun el producto un id de valor numerico con decimales segun el tipo de producto. Luego uso un filtro por numero de id para filtrar algunos productos.

import { useState } from 'react';
import { Link } from 'react-router-dom'
import product_list from '../Componentes/ListaProductos.json'

export const Product  = () => {

  const [filtro, setFiltro] = useState('todos');

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  let productosFiltrados;
  if (filtro === 'menor_a_2') {
    productosFiltrados = product_list.filter(product => product.id < 2);
} else if (filtro === 'mayor_o_igual_a_2_y_menor_a_3') {
    productosFiltrados = product_list.filter(product => product.id >= 2 && product.id <3);
  } else if (filtro === 'mayor_o_igual_a_3') {
    productosFiltrados = product_list.filter(product => product.id >= 3);
  } else {
    productosFiltrados = product_list;
  }

  return (
    <>
      <h1> Productos </h1>
      <select id="filtro" value={filtro} onChange={handleFiltroChange}>
        <option value="todos">Todos</option>
        <option value="menor_a_2">Pole</option>
        <option value="mayor_o_igual_a_2_y_menor_a_3">Indumentaria</option>
        <option value="mayor_o_igual_a_3">Suplementos</option>
      </select>
      <ul>
        {
          productosFiltrados.map(product => (
            <li key={product.id}>
              <Link to={`/Product/${product.id}`}>{product.nombre}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}


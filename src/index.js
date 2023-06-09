import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Product } from './Productos/Productos.jsx';
import { ProductosDetalle } from './Productos/ProductosDetalle.jsx';
import NavBar  from "./Componentes/NavBar.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/product/:productId' element={<ProductosDetalle />}/>
    <Route path='/*' element={<App/>}/>

  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

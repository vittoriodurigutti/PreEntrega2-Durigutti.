
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer  greeting={'Bienvenidos a la tienda de articulos para Poledancers mas completa'}/>
      
    </div>
  );
}

export default App;

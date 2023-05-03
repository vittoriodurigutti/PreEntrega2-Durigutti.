import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"
import '../Componentes/NavBar.css'

const NavBar = () => {
return (
    <nav className="navbar">
        <NavLink to="/">   <h3> <span className="otroColor1">E</span>den <span className="otroColor2">P</span>ole <span className="otroColor3">S</span>hop</h3></NavLink>
        <div className="botones">
            <NavLink to="/product" className="Productos"> Poles </NavLink>
            <NavLink to="/" className="quienesSomos"> Quienes Somos</NavLink>
            <NavLink to="/" className="contactanos"> Contactanos</NavLink>   
        </div>  
        <CartWidget className="CartWidget"/>
    </nav>
)
}

export default NavBar
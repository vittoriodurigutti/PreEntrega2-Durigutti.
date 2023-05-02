import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
return (
    <nav className="navbar">
        <h3> <span className="otroColor1">E</span>den <span className="otroColor2">P</span>ole <span className="otroColor3">S</span>hop</h3>
        <div className="botones">
            <NavLink className="botonPoles"> Poles </NavLink>
            <NavLink className="botonIndumentaria"> Indumentaria</NavLink>
            <NavLink className="botonSuplementos"> Suplementos</NavLink>   
        </div>  
        <CartWidget className="CartWidget"/>
    </nav>
)
}



export default NavBar
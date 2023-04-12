import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
return (
    <nav className="navbar">
        <h3> <span className="otroColor1">E</span>den <span className="otroColor2">P</span>ole <span className="otroColor3">S</span>hop</h3>
        <div className="botones">
            <button className="botonPoles"> Poles </button>
            <button className="botonIndumentaria"> Indumentaria</button>
            <button className="botonSuplementos"> Suplementos</button>   
        </div>  
        <CartWidget className="CartWidget"/>
    </nav>
)
}

export default NavBar
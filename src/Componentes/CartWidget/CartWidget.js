import cart from "../CartWidget/assets/cart.svg";
const CartWidget = () => {
return (
    <div className="divCartwidget">
        <img src={cart} alt="cart-widget" className="cartwidget"/>
        <span className= "contador">0</span>
    </div>
)
}
export default CartWidget
import logo from "../assets/logo.png";
import order from "../assets/order.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";


export default function Navbar()
{
    return(
        <div className="nav">
           <img className="logo" src={logo} alt="Busy buy"/>
           <div className="navitems">
            <img className="home" src={home} alt="Busy buy"/>
            <img className="order" src={order} alt="Busy buy"/>
            <img className="cart" src={cart} alt="Busy buy"/>
           </div>
        </div>
    )
}



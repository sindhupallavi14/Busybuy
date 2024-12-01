import logo from "../assets/logo.png";
import order from "../assets/order.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import logout from "../assets/log-out.png";
import signin from "../assets/Signin.png";
import { NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "./context";

export default function Navbar() {
    
    const {setIsLoggedIn,isLoggedIn}=useAppContext();
    return (
       <>
        <div className="nav">
           <NavLink to="/"> <img className="logo" src={logo} alt="Busy buy" /></NavLink>
           {!isLoggedIn  ? (  <div className="navitems1">
                <div className="navitem">
                    <NavLink className="navlink" to="/">
                        <img className="icon" src={home} alt="home" />
                        <p>Home</p>
                    </NavLink>
                </div>
                <div className="navitem">
                    <NavLink className="navlink" to="/signin">
                        <img className="icon" src={signin} alt="signin" />
                        <p>Sign-in</p>
                    </NavLink >
                </div>
            </div>
            ):( <div className="navitems2">
                <div className="navitem">
                    <NavLink className="navlink" to="/">
                        <img className="icon" src={home} alt="home" />
                        <p>Home</p>
                    </NavLink >
                </div>
                <div className="navitem">
                    <NavLink className="navlink" to="/order">
                        <img className="icon" src={order} alt="order" />
                        <p>Order</p>
                    </NavLink >
                </div>
                <div className="navitem">
                    <NavLink className="navlink" to='/cart'>
                        <img className="icon" src={cart} alt="cart" />
                        <p>Cart</p>
                    </NavLink>
                </div>
                <div className="navitem" onClick={()=>setIsLoggedIn(false)}>
                    <img className="icon" src={logout} alt="logout" />
                    <p>Logout</p>
                </div>
            </div>)}
           
           
        </div>
        <Outlet/>
       </>
    );
}

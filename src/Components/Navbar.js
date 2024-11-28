import logo from "../assets/logo.png";
import order from "../assets/order.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import logout from "../assets/log-out.png";
import signin from "../assets/Signin.png";
import { useState } from "react";

export default function Navbar() {
    const [isloggedin,setIsloggedin]=useState(false);
    return (
        <div className="nav">
            <img className="logo" src={logo} alt="Busy buy" />
 

           {!isloggedin ? (  <div className="navitems1">
                <div className="navitem">
                    <img className="icon" src={home} alt="home" />
                    <p>Home</p>
                </div>
                <div className="navitem">
                    <img className="icon" src={signin} alt="logout" />
                    <p>Sign-in</p>
                </div>
            </div>
            ):( <div className="navitems2">
                <div className="navitem">
                    <img className="icon" src={home} alt="home" />
                    <p>Home</p>
                </div>
                <div className="navitem">
                    <img className="icon" src={order} alt="order" />
                    <p>Order</p>
                </div>
                <div className="navitem">
                    <img className="icon" src={cart} alt="cart" />
                    <p>Cart</p>
                </div>
                <div className="navitem">
                    <img className="icon" src={logout} alt="logout" />
                    <p>Logout</p>
                </div>
            </div>)}
          
           
        </div>
    );
}

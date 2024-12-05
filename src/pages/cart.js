import { useNavigate } from "react-router-dom"
import { useAppContext } from "../components/context";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

export default function Cart()
{
    const navigate=useNavigate();
    const {cart,setCart,placeOrder}=useAppContext();
    // purchase product
    function handlePurchase()
    {
        navigate('/order');
    }
    const handleInc = (id) => {
      const updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCart(updatedCart);
    };
  
    // Decrement quantity
    const handleDec = (id) => {
      const updatedCart = cart.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      );
      setCart(updatedCart);
    };

    const handleRemove=(id)=>{
      const updatecart=cart.filter((item)=>item.id!== id)
      setCart(updatecart)
    }

    const total=cart.reduce((sum,item)=>
    {
      return sum+(item.price*(item.quantity || 1));
    },0)
    return(
        <>
        <div className="cart-con">
           <div className="tot-con">
                <h3>Total:${total.toFixed(2)}</h3>
                <button className="purchase-btn" onClick={placeOrder}>Purchase</button>
           </div>
           <div className="cart-items">
              {cart.length>0 ? (
                cart.map((item,idx)=>(
                    <div className="item-card" key={idx}>
                    <div className="item-img">
                      <img src={item.image} alt={item.title}/>
                    </div>
                    <div className="title">
                       <h4>{item.title}</h4>
                    </div>
                    <div className="cart-price">
                      <p>${item.price}</p>
                      <img src={plus} alt="increment" className="inc" onClick={()=>handleInc(item.id)}/>
                         <span className="quantity">{item.quantity || 1}</span>
                      <img src={minus} alt="decrement" className="dec" onClick={()=>handleDec(item.id)}/>
                    </div>
                    <button className="rmv-cart-btn" onClick={()=>handleRemove(item.id)}>Remove from cart</button>
                 </div>
                ))
              ):(<p>No items in the cart</p>)}
           </div>
        </div>
        </>
    )
}

import { useAppContext } from "../components/context";

export default function Items({title,image,price,id})
{
    const {cart,setCart,addToCart}=useAppContext();

    function handleCart()
    {
      const item={id,title,image,price};
      addToCart(item);
    }
    return(
        <div className="item-card">
           <div className="item-img">
             <img src={image} alt={title}/>
           </div>
           <div className="title">
              <h4>{title}</h4>
           </div>
           <div className="price">${price}</div>
           <button className="cart-btn" onClick={handleCart}>Add to cart</button>

        </div>
    )
}
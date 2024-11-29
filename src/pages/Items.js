import { useNavigate } from "react-router-dom"

export default function Items({title,image,price})
{
    const navigate=useNavigate();
    function handleCart()
    {
      navigate("/cart");
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
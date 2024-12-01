import { useState } from "react"
import Items from "./Items";
import { useAppContext } from "../components/context";

export default function Home()
{
    const [val,setVal]=useState(0);
    const {items}=useAppContext();

    return(
        <div className="home-con">
           <div className="filterbox">
               <h2>Filter</h2>
                <p>Price:{val}</p>
                <input type="range" id="myRange" name="volume" min="0" max="9999" value={val} className="range"
                onChange={(e) =>setVal(e.target.value)}/>
            </div>
            <div className="items-con">
           
            {items.map((item) => (
                    <Items
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                       
                    />
                ))}
            </div>
        </div> 
    )
}
import { useState } from "react"
import Items from "./Items";
import { Data } from "../data/itemdata";


export default function Home()
{
    const [val,setVal]=useState(0);
    return(
        <div className="home-con">
           <div className="filterbox">
               <h2>Filter</h2>
                <p>Price:{val}</p>
                <input type="range" id="myRange" name="volume" min="0" max="99999" value={val} className="range"
                onChange={(e) =>setVal(e.target.value)}/>
            </div>
            <div className="items-con">
               {Data.map((item)=>
                    (
                        <Items key={item.id} title={item.title} price={item.price} description={item.description} image={item.image}/>
                    ))
               }
            </div>
        </div> 
    )
}
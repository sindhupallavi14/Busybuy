import { useState } from "react"
import Items from "./Items";
import { useAppContext } from "../components/context";
import { Filter } from "./filter";

export default function Home()
{
    const [val,setVal]=useState(0);
    const {filterpro}=useAppContext();
    const [searchitem,setSearchitem]=useState("");

    const filterdItems=filterpro.filter(item=>
        item.title.toLowerCase().includes(searchitem.toLowerCase())
    )

    return(
        <div className="home-con">
            <div className="search">
              <input placeholder="Search" type="text" value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} />
            </div>
            <div className="filterbox">
                <h2>Filter</h2>
                <p>Price:{val}</p>
                <input type="range" id="myRange" name="volume" min="0" max="9999" value={val} className="range"
                onChange={(e) =>setVal(e.target.value)}/>
                <Filter/>
            </div>

            <div className="items-con">
                {filterdItems.length > 0 ? (filterdItems.map((item)=>(
                    <Items 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            image={item.image} />
                ))):(<p>No items Found</p>)}                
            </div>
        </div> 
    )
}
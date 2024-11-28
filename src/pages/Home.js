import { useState } from "react"


export default function Home()
{
    const [val,setVal]=useState(0);
    return(
        <div className="home-con">
           <div className="filterbox">
               <h2>Filter</h2>
                <p>Price:{val}</p>
                <input type="range" id="myRange" name="volume" min="0" max="99999" value={val}
                onChange={(e) =>setVal(e.target.value)}/>
            </div>
            <div className="items-con">
                <h1>sindhu</h1>
            </div>
        </div> 
    )
}
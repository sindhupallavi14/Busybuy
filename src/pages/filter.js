import { useAppContext } from "../components/context";

export function Filter(){
    const {filters,activefilter,setActivefilter} = useAppContext();
   
    function handleFilter(val) {
        const temp_data = activefilter.includes(val)
            ? activefilter.filter(item => item !== val)  
            : [...activefilter, val];  
        setActivefilter(temp_data);  
    }
    return(
        <>
            <h3>Category</h3>
            <div className="category-section">
                {filters.Options.map((item)=>(
                    <div>
                        <input type="checkbox" name={item.name} id={item.value} 
                        onChange={()=>handleFilter(item.value)}/>
                        <label for={item.value}>{item.label}</label>
                    </div>

                ))}
            </div>
        </>
    )
}
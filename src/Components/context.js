import { db } from "./firebase";
import { createContext, useState, useContext } from "react";
import { collection ,addDoc,getDocs } from "firebase/firestore";
import { useEffect } from "react";

// Create Context
const AppContext = createContext();

// Custom Hook to Access Context
export function useAppContext() {
  return useContext(AppContext);
}

// Context Provider Component
export function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [items,setItems]=useState([]);

   const addItemsToFirebase=async()=>
    {
        try
      {        
        const response=await fetch(("https://fakestoreapi.com/products"))
        const apidata=await response.json();
        const itemsCollection=collection(db,"products");
        for(const item of apidata)
        {
            await addDoc(itemsCollection,item);
        }
    
        fetchItems();
      }
      catch(err)
      {
        console.log("error",err);
      }
    }

     const fetchItems=async()=>
    {
         const itemsCollection=collection(db,"products");
         const itemsSnapshot=await getDocs(itemsCollection);
         const  itemsList=itemsSnapshot.docs.map((doc)=>
                    (
                        {
                            id:doc.id,
                            ...doc.data()
                        }
                    )
          )
          setItems(itemsList)
    }

    useEffect(()=>
    {
        fetchItems();
    },[]);


  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    showSignin,
    setShowSignin,
    items,
    fetchItems,
    addItemsToFirebase,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

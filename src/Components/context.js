
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { collection, addDoc, getDocs, doc, setDoc ,onSnapshot,getDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

// Create Context
const AppContext = createContext();

// Custom Hook to Access Context
export function useAppContext() {
  return useContext(AppContext);
}

// Context Provider Component
export function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [orders,SetOrders] = useState([]);
  const [cart,setCart] = useState([]);
  const [uid, setUid] = useState(null);
  const [filterpro,setFilterpro]=useState([]);
  const [activefilter,setActivefilter]=useState([]);

  const filters={
    id:"categories",
    name:"categories",
    Options:[
      {value:"men's clothing",label:"Men's clothing"},
      {value:"jewelery",label:"Jewelery"},
      {value:"electronics",label:"Electronics"},
      {value:"women's clothing",label:"Women's clothing"}
    ]
  }

  useEffect(() => {
    const updateFilteredProducts = () => {
        if (activefilter.length === 0) {
            setFilterpro(items);  
        } else {
            const filtered = items.filter((item) => activefilter.includes(item.category));
            setFilterpro(filtered);  
        }
    };

    updateFilteredProducts();  
}, [activefilter, items]);

  // Add Items to Firebase from API
  const addItemsToFirebase = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const apidata = await response.json();
      const itemsCollection = collection(db, "products");

      for (const item of apidata) {
        await addDoc(itemsCollection, item);
      }

      fetchItems(); 
    } catch (err) {
      console.log("Error adding items to Firebase:", err);
    }
  };

  // Fetch Items from Firebase
  const fetchItems = async () => {
    try {
      const itemsCollection = collection(db, "products");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsList);
      setFilterpro(itemsList)
    } catch (err) {
      console.log("Error fetching items from Firebase:", err);
    }
  };

  // Sign-Up Logic
  const handleSignup = async (username, email, password, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
      });
      await setDoc(doc(db, "cart", user.uid), { cartdocs: [] });
      await setDoc(doc(db, "orders", user.uid), { orderdocs: [] });
      setUid(user.uid);
      setIsLoggedIn(true);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(`Signup Error: ${err.message}`);
    }
  };

  // Sign-In Logic
  const handleSignin = async (email, password, navigate) => {
    try {
      const userCredential=await signInWithEmailAndPassword(auth, email, password);
      const user=userCredential.user;
       setUid(user.uid);
      setIsLoggedIn(true);
      toast.success("Sign-in successful!");
      navigate("/");
    } catch (err) {
      toast.error(`Sign-In Error: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  
  useEffect(()=>
  {
    if(uid)
    {
      const cartRef=doc(db,"cart",uid);
      onSnapshot(cartRef,async (docSnapshot)=>
      {
        if(docSnapshot.exists())
        {
          const cartData = docSnapshot.data().cartdocs || [];
          console.log("Fetched cart from Firestore:", cartData); // Debugging
          setCart(cartData);
        }
        else{
          await setDoc(cartRef, { cartdocs: [] });
          setCart([]);
        }
      });

      const ordersRef = doc(db, "orders", uid);
      onSnapshot(ordersRef, async (docSnapshot) => {
        if (docSnapshot.exists()) {
          SetOrders(docSnapshot.data().orderdocs || []);
        }
        else{
          await setDoc(ordersRef, { orderdocs: [] });
          SetOrders([]);
        }
      });
    }
  },[uid]);

  const addToCart = async (item) => {
    try {
      if (!uid) {
        console.error("UID is not set");
        return;
      }
  
      const cartRef = doc(db, "cart", uid);
      const cartDoc = await getDoc(cartRef);
  
      // Initialize the cart if the document doesn't exist
      if (!cartDoc.exists()) {
        await setDoc(cartRef, { cartdocs: [] });
      }
  
      const existingCart = cartDoc.data().cartdocs || [];
      const existingItemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);
  
      let updatedCart;
  
      if (existingItemIndex !== -1) {
        // Increment quantity if the item already exists
        updatedCart = existingCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        // Add new item to the cart
        updatedCart = [...existingCart, { ...item, quantity: 1 }];
      }
  
      // Update Firestore
      await setDoc(cartRef, { cartdocs: updatedCart });
  
      // Update local state
      setCart(updatedCart);
      console.log("Updated cart:", updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  

  const placeOrder = async () => {
    if (uid && cart.length > 0) {
      const orderRef = doc(db, "orders", uid);
    const orderDoc = await getDoc(orderRef);

    if (!orderDoc.exists()) {
      // Create an empty orders document if it doesn't exist
      await setDoc(orderRef, { orderdocs: [] });
    }
    const currentDateTime = new Date().toLocaleString();
    const newOrders = [...orders, ...cart.map((item)=>({...item,date:currentDateTime}))];
    await setDoc(orderRef, { orderdocs: newOrders });
    SetOrders(newOrders);
    setCart([]);  // Clear cart after placing order
    }
  };


  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    items,
    fetchItems,
    addItemsToFirebase,
    handleSignup,
    handleSignin,
    cart,
    setCart,
    uid,
    orders,
    addToCart,
    placeOrder,
    filters,
    activefilter,
    setActivefilter,
    filterpro,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

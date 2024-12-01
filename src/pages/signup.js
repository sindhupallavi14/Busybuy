import { useNavigate } from "react-router-dom"
import { useAppContext } from "../components/context";
import { auth, db} from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup()
{
   
   const { setIsLoggedIn }=useAppContext();
    const navigate=useNavigate();
    async function handleSignupbtn(e)
    {
      e.preventDefault();
      console.log(e.target.password.value);
      
      const username=e.target.username.value;
      const email=e.target.email.value
      const password=e.target.password.value
      try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user=userCredential.user;

        await setDoc(doc(db,"users",user.uid),{
         username,email,
        });
         setIsLoggedIn(true);
         toast.success("signup successful!!");
         navigate("/");
      }
      catch(err)
      {
         toast.error(`Signup Error: ${err.message}`);
      }

    }
    return(
       <>
        <form className="signin-con" onSubmit={(e)=>handleSignupbtn(e)}>
           <h1>Sign Up</h1>
           <input name="username" type="text" placeholder="Enter Name" required />
           <input name="email" placeholder="Enter Email" required />
           <input name="password" type="password" placeholder="Enter Password" required/>
           <button className="signup-btn" >Sign Up</button>
        </form>
       
       </>
    )
}
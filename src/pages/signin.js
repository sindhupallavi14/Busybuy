import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/context";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin()
{
   const { setIsLoggedIn }=useAppContext();
    const navigate=useNavigate();
    async function handleSigninbtn(e)
    {
         e.preventDefault();
         const email=e.target.email.value
         const password=e.target.password.value
         try{
             await signInWithEmailAndPassword(auth,email,password);
             setIsLoggedIn(true);
             toast.success("SignIn Sucessfull!!")
             navigate('/');
         }
         catch(err)
         {
            toast.error(`SignIn Error: ${err.message}`); 
         }
        
    }
    function handleSignup()
    {
      navigate('/signup')
    }
    return(
       <>
        <form className="signin-con" onSubmit={(e)=>handleSigninbtn(e)}>
           <h1>Sign In</h1>
           <input name="email"  placeholder="Enter Email" required/>
           <input name="password" type="password" placeholder="Enter Password" required/>
           <button className="signin-btn">Sign in</button>
           <h4 className="signup" onClick={handleSignup}>Or Signup Instead</h4>
        </form>
       
       </>
    )
}
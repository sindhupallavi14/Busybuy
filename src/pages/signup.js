import { useNavigate } from "react-router-dom"
import { useAppContext } from "../components/context";

export default function Signup()
{
   const { setIsLoggedIn }=useAppContext();
    const navigate=useNavigate();
    function handleSignupbtn(e)
    {
       e.preventDefault();
       setIsLoggedIn(true);
       navigate('/');
    }
    return(
       <>
        <form className="signin-con">
           <h1>Sign Up</h1>
           <input type="text" placeholder="Enter Name" required />
           <input type="email" placeholder="Enter Email" required />
           <input type="password" placeholder="Enter Password" required/>
           <button className="signup-btn" onClick={handleSignupbtn} >Sign Up</button>
        </form>
       
       </>
    )
}
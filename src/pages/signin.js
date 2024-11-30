import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/context";

export default function Signin()
{
   const { setIsLoggedIn }=useAppContext();
    const navigate=useNavigate();
    function handleSigninbtn(e)
    {
       e.preventDefault();
       setIsLoggedIn(true);
       navigate('/');
    }
    function handleSignup()
    {
      navigate('/signup')
    }
    return(
       <>
        <form className="signin-con" >
           <h1>Sign In</h1>
           <input type="email"  placeholder="Enter Email" required/>
           <input type="password" placeholder="Enter Password" required/>
           <button className="signin-btn" onClick={handleSigninbtn}>Sign in</button>
           <h4 className="signup" onClick={handleSignup}>Or Signup Instead</h4>
        </form>
       
       </>
    )
}
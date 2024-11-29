import { useNavigate } from "react-router-dom";

export default function Signin({setIsLoggedIn,setShowSignin})
{
    const navigate=useNavigate();
    function handleSigninbtn(e)
    {
       e.preventDefault();
       setIsLoggedIn(true);
       console.log("login");
       
      //  setShowSignin(false); 
    
       navigate('/');
    }
    return(
       <>
        <form className="signin-con">
           <h1>Sign In</h1>
           <input type="email" placeholder="Enter Email"/>
           <input type="password" placeholder="Enter Password"/>
           <button className="signin-btn" onClick={handleSigninbtn}>Sign in</button>
           <h4 className="signup">Or Signup Instead</h4>
        </form>
       
       </>
    )
}
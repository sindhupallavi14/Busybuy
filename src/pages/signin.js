

export default function Signin()
{

    return(
        <form className="signin-con">
           <h1>Sign In</h1>
           <input type="email" placeholder="Enter Email"/>
           <input type="password" placeholder="Enter Password"/>
           <button className="signin-btn">Sign in</button>
        </form>
    )
}
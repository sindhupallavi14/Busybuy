
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/context";

export default function Signin() {
  const { handleSignin } = useAppContext();
  const navigate = useNavigate();

  async function handleSigninbtn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await handleSignin(email, password, navigate);
  }

  function handleSignup() {
    navigate("/signup");
  }

  return (
    <form className="signin-con" onSubmit={handleSigninbtn}>
      <h1>Sign In</h1>
      <input name="email" type="email" placeholder="Enter Email" required />
      <input name="password" type="password" placeholder="Enter Password" required />
      <button className="signin-btn">Sign in</button>
      <h4 className="signup" onClick={handleSignup}>
        Or Signup Instead
      </h4>
    </form>
  );
}

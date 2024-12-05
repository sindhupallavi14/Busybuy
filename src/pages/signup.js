
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/context";

export default function Signup() {
  const { handleSignup } = useAppContext();
  const navigate = useNavigate();

  async function handleSignupbtn(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await handleSignup(username, email, password, navigate);
  }

  return (
    <form className="signin-con" onSubmit={handleSignupbtn}>
      <h1>Sign Up</h1>
      <input name="username" type="text" placeholder="Enter Name" required />
      <input name="email" type="email" placeholder="Enter Email" required />
      <input name="password" type="password" placeholder="Enter Password" required />
      <button className="signup-btn">Sign Up</button>
    </form>
  );
}

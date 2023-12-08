import { LoginIn } from "../components/loginsignuppage/login";
import { SignUp } from "../components/loginsignuppage/signup/signUp";
const Auth = () => {
  return (
    <div className="authentication-container">
      <LoginIn />
      <SignUp />
    </div>
  );
};

export default Auth;

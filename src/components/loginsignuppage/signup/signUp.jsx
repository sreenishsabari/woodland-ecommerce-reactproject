import "./signup.scss";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signUpAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import { useUser } from "../../../components/context";
console.log(useUser);
// const defaultFormFields = {
//   userName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// }

const SignUp = () => {
  const { formFields, setFormFields } = useUser();
  console.log(formFields);
  const { userName, email, password, confrimPassword } = formFields;
  let Navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    Navigate("/contact");
    if (!userName || !email) {
      alert(`All the fields are Mandatory`);
      return;
    }
    if (password !== confrimPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await signUpAuthWithEmailAndPassword(email, password);
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user, {
        userName,
      });

      console.log(userDocRef);
    } catch (err) {
      console.log(`Error Occurred while registering`, err.message);
    }
  };
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields({ ...formFields, [name]: value });
  };
  //Data Validation
  //Save data to a useState variable
  //signUpAuthWithEmailAndPassword
  //CreateUserAuthDocument

  return (
    <div className="signup-container">
      <form onSubmit={submitHandler}>
        <h2>Don&apos;t have an account?</h2>
        <span>Sign Up with your email and password</span>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          required
          value:userName
          onChange={changeHandler}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value:email
          required
          onChange={changeHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value:password
          onChange={changeHandler}
        />
        <label htmlFor="confrimpassword">ConfrimPassword:</label>
        <input
          type="password"
          id="confrimPassword"
          name="confrimPassword"
          required
          value:confrimPassword
          onChange={changeHandler}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;

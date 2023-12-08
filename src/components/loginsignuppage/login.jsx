import "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const defaultFields = {
  email: "",
  password: "",
};
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/index";

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFields);

  const { email, password } = formFields;
  let Navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    Navigate("/");
    if (email && password) {
      try {
        const { user } = await signInAuthWithEmailAndPassword(email, password);
        console.log(user);
      } catch (err) {
        if (err.code === "auth/user-not-found") {
          alert(`No user associated with this email`);
        } else if (err.code === "auth/wrong-password") {
          alert(`incorrect Password`);
        }
        console.log(`Error Occurred while sign In`, err.code);
      }

      setFormFields(defaultFields);
    } else {
      alert("All Fields are mandatory");
      return;
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormFields({ ...formFields, [key]: value });
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
        <h2 className="logintitle">Login</h2>

        <label className="loginla1" htmlFor="email">
          Email:
        </label>
        <input
          className="logininput"
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={changeHandler}
        />

        <label className="loginla" htmlFor="password">
          Password:
        </label>
        <input
          className="logininput"
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={changeHandler}
        />

        <button type="submit" className="buttonsec">
          Login
        </button>
        <button
          className="buttonsec"
          buttonType="google"
          type="button"
          onClick={signInWithGoogle}
        >
          SignIn With Google
        </button>
        <span className="spantext">or</span>

        <Link to="/newacbtn" className="buttonlink">
          New to Woodland?Create an account
        </Link>
      </form>
    </div>
  );
};

export default Login;

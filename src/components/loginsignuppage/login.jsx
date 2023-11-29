import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="logintitle">Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

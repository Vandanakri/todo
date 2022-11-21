import React from "react";

function Login({ isLoggingIn }) {
  return (
    <div>
      <div>
        <p className="email">Email</p>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <div className="password">
          <p>Password</p>
          <a href="#">Forgot password ?</a>
        </div>
        <input type="text" placeholder="Password" />
      </div>
      <button className="btn">{isLoggingIn ? "Login" : "Sign UP"}</button>
    </div>
  );
}

export default Login;
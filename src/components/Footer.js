import React from "react";

function Footer({ isLoggingIn, toggleLoggingIn }) {
  return (
    <div>
      <div className="footer">
        <p className="login-with">Login with</p>
      </div>
      <div className="sign-up" onClick={toggleLoggingIn}>
        <a href="#">
          {isLoggingIn
            ? "Don’t have an account? Sign Up here"
            : "Enter the account"}
        </a>
      </div>
    </div>
  );
}
export default Footer;
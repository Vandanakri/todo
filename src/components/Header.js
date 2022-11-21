import React from "react";

function Header({ isLoggingIn }) {
  return (
    <div className="header">
      <div>
        <p className="login">{isLoggingIn ? "Login" : "Sign UP"}</p>
      </div>
    </div>
  );
}

export default Header;
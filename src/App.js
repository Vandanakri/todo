import React, { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const toggleLoggingIn = () => setIsLoggingIn(!isLoggingIn);

  return (
    <div className="bg-color">
      <div className="bg-color2">
        <Header isLoggingIn={isLoggingIn} />
        <Login isLoggingIn={isLoggingIn} />
        <Footer isLoggingIn={isLoggingIn} toggleLoggingIn={toggleLoggingIn} />
      </div>
      
    </div>
  );
}

export default App;
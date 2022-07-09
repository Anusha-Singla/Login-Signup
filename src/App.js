import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
      <Login />
      <h2>Register</h2>
      <Register />
    </div>
  );
}

export default App;

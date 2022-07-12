import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
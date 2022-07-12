import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
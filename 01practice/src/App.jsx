import { Routes, Route, Link } from "react-router-dom";
import Ghar from "./pages/Ghar";
import About from "./pages/About";
import User from "./pages/User";

export default function App() {
  return (
    <div style={{ padding: 50 }}>
      <h1>React Demo App</h1>

      <nav style={{ display: "flex", gap: 20 , fontSize:"20px"}}>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Ghar />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
}

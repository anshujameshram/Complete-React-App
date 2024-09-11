import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Cart from "./cart";
import Final from "./final";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/items/:type" element={<Items />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/final" element={<Final />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

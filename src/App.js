import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Private from "./components/Private";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"element={<Private><Home /></Private>}></Route>
        {/* <Route path="/"element={<Home />}></Route> */}
        <Route path="/cart"element={<Private><Cart /></Private>}></Route>
        {/* <Route path="/cart"element={<Cart />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

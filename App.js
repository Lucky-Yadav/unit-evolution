import "./App.css";
import Navbar from "./src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import Private from "./src/components/Private";
import Cart from "./src/components/Cart";

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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import { useState } from "react";

export default function App() {
  const [cartCounter, setcartCounter] = useState(0);
  const [search, setsearch] = useState("");
  const [cartItems, setcartItems] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar
          cartCounter={cartCounter}
          search={search}
          setsearch={setsearch}
        />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                setcartCounter={setcartCounter}
                cartCounter={cartCounter}
                search={search}
                setcartItems={setcartItems}
              />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} cartCounter={cartCounter} setcartCounter={setcartCounter}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

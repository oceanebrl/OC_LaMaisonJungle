import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import CartModal from "./pages/CartModal";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <React.StrictMode>
      <Header />
      <CartModal cart={cart} updateCart={updateCart} />
      <Home cart={cart} updateCart={updateCart} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

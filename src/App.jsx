import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const [cartQty, setCartQty] = useState(0);
  useEffect(() => {
    setCartQty(cart.map((item) => item.qty).reduce((a, b) => a + b, 0));
  }, [cart]);

  return (
    <>
      <Navbar cartQty={cartQty} />
      <Outlet context={{ cart, setCart, cartQty }} />
      <Footer />
    </>
  );
}

export default App;

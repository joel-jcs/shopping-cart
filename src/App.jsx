import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  cartQty: [],
});

function App() {
  const [cart, setCart] = useState([]);

  const [cartQty, setCartQty] = useState(0);
  useEffect(() => {
    setCartQty(cart.map((item) => item.qty).reduce((a, b) => a + b, 0));
  }, [cart]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, cartQty }}>
        <Navbar />
        <Outlet />
      </CartContext.Provider>
      <Footer />
    </>
  );
}

export default App;

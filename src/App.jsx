import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </>
  );
}

export default App;

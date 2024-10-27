import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

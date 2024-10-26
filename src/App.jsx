import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Store from "./components/Store";

function App() {
  return (
    <>
      <Navbar />
      <Store categoryName={"Men's Clothing"} />
      <Footer />
    </>
  );
}

export default App;

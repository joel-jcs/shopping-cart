import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Store from "./components/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Store />,
    children: [
      {
        path: "womens-clothing",
        element: <Store categoryName="women's clothing" />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { CartContext } from "../App";

export default function Store() {
  const { cart, setCart } = useContext(CartContext);

  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("all items");
  const { category } = useParams();

  const menCloth = ["mens-shirts", "mens-shoes"];
  const womenCloth = ["womens-dresses", "womens-shoes"];
  const menAcc = ["mens-watches"];
  const womenAcc = ["womens-jewellery", "womens-bags", "women-watches"];
  const all = [...menCloth, ...womenCloth, ...menAcc, ...womenAcc];

  const url = "https://dummyjson.com/products?limit=0";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 400) {
        throw new Error("server error");
      }
      const data = await response.json();
      const mensClothing = data.products.filter((item) =>
        menCloth.includes(item.category),
      );
      const mensAccessories = data.products.filter((item) =>
        menAcc.includes(item.category),
      );
      const womensClothing = data.products.filter((item) =>
        womenCloth.includes(item.category),
      );
      const womensAccessories = data.products.filter((item) =>
        womenAcc.includes(item.category),
      );
      const allProducts = data.products.filter((item) =>
        all.includes(item.category),
      );

      let filteredData;

      if (category === "mens-clothing") {
        filteredData = mensClothing;
        setCategoryName("men's clothing");
      } else if (category === "womens-clothing") {
        filteredData = womensClothing;
        setCategoryName("women's clothing");
      } else if (category === "mens-accessories") {
        filteredData = mensAccessories;
        setCategoryName("men's accessories");
      } else if (category === "womens-accessories") {
        filteredData = womensAccessories;
        setCategoryName("women's accessories");
      } else {
        filteredData = allProducts;
        setCategoryName("all items");
      }

      setProductData(filteredData);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <>
        <div className="storeContainer my-20 flex min-h-[80vh] flex-col items-center justify-start gap-40">
          <h1 className="text-6xl font-black uppercase">Store</h1>
          <h2 className="text-3xl font-bold">Loading...</h2>
        </div>
      </>
    );
  } else if (error) {
    return (
      <>
        <div className="storeContainer my-20 flex min-h-[80vh] flex-col items-center justify-start gap-40">
          <h1 className="text-6xl font-black uppercase">Store</h1>
          <h2 className="text-3xl font-bold">Error: {error.message}</h2>
        </div>
      </>
    );
  }

  return (
    <div className="storeContainer my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-black">{categoryName.toUpperCase()}</h1>
      <div className="productContainer my-10 grid grid-cols-4 gap-5 px-10">
        {productData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
}

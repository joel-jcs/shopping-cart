import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Store({ categoryName }) {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const menCloth = ["mens-shirts", "mens-shoes"];
  const womenCloth = ["womens-dresses", "womens-shoes"];
  const menAcc = ["mens-watches"];
  const womenAcc = ["womens-jewellery", "womens-bags", "women-watches"];

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

      let filteredData;
      if (categoryName.toLowerCase() === "men's clothing") {
        filteredData = mensClothing;
      } else if (categoryName.toLowerCase() === "women's clothing") {
        filteredData = womensClothing;
      } else if (categoryName.toLowerCase() === "men's accessories") {
        filteredData = mensAccessories;
      } else if (categoryName.toLowerCase() === "women's accessories") {
        filteredData = womensAccessories;
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
  }, [categoryName]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="storeContainer my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-black">{categoryName.toUpperCase()}</h1>
      <div className="productContainer my-10 grid grid-cols-4 gap-5 px-10">
        {productData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

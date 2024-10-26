import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Store() {
  {
    /* 
        get the data from dummyproduct data (it will be via useproduct data hook / useEffect)
        the store function needs to be async
        set products state var to empty array
        if loading, display "loading" text
        if error, display error pop-up
        set product state to await productdata
        show productcard components for each in the products state var
      */
  }

  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const menCloth = ["Mens Shirts", "Mens Shoes"];
  const womenCloth = ["womens-dresses", "womens-shoes"];
  const menAcc = ["Mens Watches"];
  const womenAcc = ["Womens Jewellery", "Womens Bags", "Womens Watches"];

  const url = "https://dummyjson.com/products?limit=0";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 400) {
        throw new Error("server error");
      }
      const data = await response.json();
      console.log(data.products);
      const womensClothing = data.products.filter((item) =>
        womenCloth.includes(item.category),
      );

      console.log(womensClothing);

      setProductData(womensClothing);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="storeContainer my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-black">CATEGORY NAME</h1>
      <div className="productContainer my-10 grid grid-cols-4 gap-5 px-10">
        {productData &&
          productData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

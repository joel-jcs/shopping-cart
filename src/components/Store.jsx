import { useState } from "react";
import data from "../assets/dummyProductData";
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
  const [products, setProducts] = useState(data);

  console.log(products);

  return (
    <div className="storeContainer my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-black">CATEGORY NAME</h1>
      <div className="productContainer my-10 flex flex-wrap gap-5 px-10 py-20">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

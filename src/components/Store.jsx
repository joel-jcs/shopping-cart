import { useState } from "react";
import data from "../assets/dummyProductData";

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
          return (
            <div
              className="productCard flex flex-col items-center justify-center gap-3 rounded-lg px-1 py-3"
              key={product.id}
            >
              <img
                src={product.image}
                className="productImg h-full select-none bg-white object-cover"
              />
              <div className="productDetails flex h-auto w-full flex-col items-center py-2">
                <h2 className="productPrice text-xl font-bold text-red-500">
                  {product.price}
                </h2>
                <span className="productName mb-4 text-sm font-bold">
                  {product.name}
                </span>
                <div className="productQtyContainer flex h-1/4 w-full items-center justify-center gap-2 py-0">
                  <button>-</button>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    placeholder="1"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 2))
                    }
                    className="px-2 py-1.5 text-center outline-2 outline-gray-600"
                  />
                  <button>+</button>
                </div>
                <button className="mt-3">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

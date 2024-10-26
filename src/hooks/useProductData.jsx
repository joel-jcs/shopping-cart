import { useState, useEffect } from "react";

//todo update to product, not categories

const useProductData = () => {
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const menCloth = ["Mens Shirts", "Mens Shoes"];
  const womenCloth = ["Womens Dresses", "Womens Shoes"];
  const menAcc = ["Mens Watches"];
  const womenAcc = ["Womens Jewellery", "Womens Bags", "Womens Watches"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const filteredData = [
          {
            name: "Men's Clothing",
            image:
              "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
            data: data.filter((item) =>
              menCloth.some((product) => product.includes(item.name)),
            ),
          },
          {
            name: "Men's Accessories",
            image:
              "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
            data: data.filter((item) =>
              menAcc.some((product) => product.includes(item.name)),
            ),
          },
          {
            name: "Women's Clothing",
            image:
              "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
            data: data.filter((item) =>
              womenCloth.some((product) => product.includes(item.name)),
            ),
          },
          {
            name: "Women's Accessories",
            image:
              "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
            data: data.filter((item) =>
              womenAcc.some((product) => product.includes(item.name)),
            ),
          },
        ];
        setProductData(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { productData, error, loading };
};

export default useProductData;

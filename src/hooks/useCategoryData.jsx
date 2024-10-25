import { useState, useEffect } from "react";

const useCategoryData = () => {
  const [categoryData, setCategoryData] = useState({});
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
          "https://dummyjson.com/products/categories"
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const filteredData = {
          mensClothing: data.filter((item) =>
            menCloth.some((category) => category.includes(item.name))
          ),
          mensAccessories: data.filter((item) =>
            menAcc.some((category) => category.includes(item.name))
          ),
          womensClothing: data.filter((item) =>
            womenCloth.some((category) => category.includes(item.name))
          ),
          womenAccessories: data.filter((item) =>
            womenAcc.some((category) => category.includes(item.name))
          ),
        };
        setCategoryData(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { categoryData, error, loading };
};

export default useCategoryData;

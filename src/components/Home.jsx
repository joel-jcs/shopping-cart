import PromoBanner from "./PromoBanner";
import CategoryCard from "./CategoryCard";
import data from "../assets/categoryData";
import { useState } from "react";

export default function Home() {
  const [categories] = useState(data);

  return (
    <div className="homeContainer">
      <PromoBanner
        title="LIMITED TIME OFFER"
        subtitle="USE 'LETSGOO' AT CHECKOUT FOR 50% OFF"
        imageSrc="https://c.stocksy.com/a/Iu2P00/z9/5969378.jpg"
      />
      <div className="categoriesSection">
        <h1 className="categoriesSectionTitle">SHOP BY CATEGORY</h1>
        <div className="categoriesContainer">
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                imageSrc={category.image}
                altText=""
                categoryName={category.name}
              />
            );
          })}
        </div>
      </div>

      <PromoBanner
        title="SUMMER SALE"
        subtitle="ALL SUMMER ITEMS ON CLEARANCE UNTIL 12/25"
        imageSrc="https://c.stocksy.com/a/Mq0C00/z9/2863182.jpg"
      />
    </div>
  );
}

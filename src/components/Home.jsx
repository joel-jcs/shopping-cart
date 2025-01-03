import PromoBanner from "./PromoBanner";
import CategoryCard from "./CategoryCard";
import data from "../assets/categoryData";
import { useState } from "react";

export default function Home() {
  const [categories] = useState(data);

  return (
    <div className="homeContainer flex flex-col items-center justify-center gap-10">
      <PromoBanner
        title="LIMITED TIME OFFER"
        subtitle="USE 'LETSGOO' AT CHECKOUT FOR 50% OFF"
        imageSrc="https://c.stocksy.com/a/cRhF00/z9/3741924.jpg"
      />
      <div className="categoryContainer mb-10 mt-8 flex flex-col">
        <h1 className="mb-10 text-4xl font-black">SHOP BY CATEGORY</h1>
        <div className="flex h-[70vh] w-screen items-center justify-center gap-10 px-20">
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
        subtitle="CHECK OUT OUR SUMMER COLLECTION"
        imageSrc="https://c.stocksy.com/a/Mq0C00/z9/2863182.jpg"
      />
    </div>
  );
}

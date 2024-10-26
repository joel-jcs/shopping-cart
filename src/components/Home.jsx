import PromoBanner from "./PromoBanner";
import CategoryCard from "./CategoryCard";
import data from "../assets/categoryData";
import { useState } from "react";

export default function Home() {
  const [categories] = useState(data);

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-10">
      <PromoBanner
        title="LIMITED TIME OFFER"
        subtitle="USE 'LETSGOO' AT CHECKOUT FOR 50% OFF"
        imageSrc="https://c.stocksy.com/a/Iu2P00/z9/5969378.jpg"
      />
      <div className="mb-8 mt-8 flex flex-col">
        <h1 className="mb-6 text-4xl font-black">SHOP BY CATEGORY</h1>
        <div className="flex h-[70vh] w-full items-center justify-center gap-10">
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

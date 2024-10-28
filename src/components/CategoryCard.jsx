import { useNavigate } from "react-router-dom";

export default function CategoryCard({ imageSrc, altText, categoryName }) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    const categoryPath = categoryName
      .toLowerCase()
      .replace(/'/g, "")
      .replace(/\s/g, "-");

    navigate(`/shop/${categoryPath}`);
  };

  return (
    <div
      onClick={handleBtnClick}
      className="relative flex h-full w-1/4 cursor-pointer items-center justify-center rounded-2xl transition-all duration-150 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={imageSrc}
        alt=""
        className="h-full w-full rounded-2xl object-cover"
      />
      <button className="absolute bottom-[10%] uppercase">
        SHOP {categoryName}
      </button>
    </div>
  );
}

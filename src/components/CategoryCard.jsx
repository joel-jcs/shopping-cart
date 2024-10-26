export default function CategoryCard({ imageSrc, altText, categoryName }) {
  return (
    <div className="relative flex h-full w-1/4 cursor-pointer items-center justify-center">
      <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      <button className="absolute bottom-[10%]">
        SHOP {categoryName.toUpperCase()}
      </button>
    </div>
  );
}

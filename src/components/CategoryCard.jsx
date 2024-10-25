export default function CategoryCard({ imageSrc, altText, categoryName }) {
  return (
    <div className="categoryCardContainer">
      <img src={imageSrc} alt="" />
      <button>SHOP {categoryName.toUpperCase()}</button>
    </div>
  );
}

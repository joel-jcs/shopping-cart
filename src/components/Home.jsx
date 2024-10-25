import PromoBanner from "./PromoBanner";
import CategoryCard from "./CategoryCard";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>Home</h1>
      <PromoBanner imageSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
      <div className="categoriesContainer">
        <CategoryCard
          imageSrc="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          altText=""
          categoryName="men"
        />
        <CategoryCard
          imageSrc="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          altText=""
          categoryName="women"
        />
        <CategoryCard
          imageSrc="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          altText=""
          categoryName="kids"
        />
        <CategoryCard
          imageSrc="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          altText=""
          categoryName="accessories"
        />
      </div>
    </div>
  );
}

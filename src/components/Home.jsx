import PromoBanner from "./PromoBanner";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>Home</h1>
      <PromoBanner imageSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
      <div className="categoriesContainer">
        <div className="categoryCardContainer">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            alt=""
          />
          <button>SHOP</button>
        </div>
        <div className="categoryCardContainer">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            alt=""
          />
          <button>SHOP</button>
        </div>
        <div className="categoryCardContainer">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            alt=""
          />
          <button>SHOP</button>
        </div>
        <div className="categoryCardContainer">
          <img
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            alt=""
          />
          <button>SHOP</button>
        </div>
      </div>
    </div>
  );
}

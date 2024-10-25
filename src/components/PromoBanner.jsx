export default function PromoBanner({ imageSrc }) {
  return (
    <div className="promoContainer">
      <img src={imageSrc} className="promoBanner" />
      <button className="promoButton">SHOP NOW</button>
    </div>
  );
}

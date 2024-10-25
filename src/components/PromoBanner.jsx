export default function PromoBanner({ title, subtitle, imageSrc }) {
  return (
    <div className="promoContainer">
      <h1 className="promoTitle">{title}</h1>
      <h2 className="promoSubtitle">{subtitle}</h2>
      <img src={imageSrc} className="promoBanner" />
      <button className="promoButton">SHOP NOW</button>
    </div>
  );
}

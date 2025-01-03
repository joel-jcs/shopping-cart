import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PromoBanner({ title, subtitle, imageSrc }) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleBtnClick}
      className="after:z-1 relative flex h-[80vh] w-screen cursor-pointer items-center justify-center bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-black after:opacity-40"
    >
      <h1 className="absolute bottom-[40%] z-10 text-5xl font-black text-white">
        {title}
      </h1>
      <h2 className="absolute bottom-[32%] z-10 text-3xl font-black text-white">
        {subtitle}
      </h2>
      <img src={imageSrc} className="h-full w-full object-cover object-top" />
      <button className="absolute bottom-[15%] z-10 text-lg">SHOP NOW</button>
    </div>
  );
}

PromoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

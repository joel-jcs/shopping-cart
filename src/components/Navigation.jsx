import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation({ cartQty }) {
  const cartIcon = (
    <svg
      className="w-7 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cart</title>
      <path d="M16,18C17.1,18 18,18.9 18,20C18,21.1 17.1,22 16,22C14.9,22 14,21.1 14,20C14,18.9 14.9,18 16,18M16,19C15.45,19 15,19.45 15,20C15,20.55 15.45,21 16,21C16.55,21 17,20.55 17,20C17,19.45 16.55,19 16,19M7,18C8.1,18 9,18.9 9,20C9,21.1 8.1,22 7,22C5.9,22 5,21.1 5,20C5,18.9 5.9,18 7,18M7,19C6.45,19 6,19.45 6,20C6,20.55 6.45,21 7,21C7.55,21 8,20.55 8,20C8,19.45 7.55,19 7,19M18,6H4.27L6.82,12H15C15.33,12 15.62,11.84 15.8,11.6L18.8,7.6V7.6C18.93,7.43 19,7.22 19,7C19,6.45 18.55,6 18,6M15,13H6.87L6.1,14.56L6,15C6,15.55 6.45,16 7,16H18V17H7C5.9,17 5,16.1 5,15C5,14.65 5.09,14.32 5.25,14.03L5.97,12.56L2.34,4H1V3H3L3.85,5H18C19.1,5 20,5.9 20,7C20,7.5 19.83,7.92 19.55,8.26L16.64,12.15C16.28,12.66 15.68,13 15,13Z" />
    </svg>
  );

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      data-testid="navbar"
      className="fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-evenly bg-[#181a1b] text-white shadow-md"
    >
      <Link
        to=""
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer text-2xl font-black transition-all duration-100 ease-linear"
      >
        dress.me
      </Link>
      <Dropdown />
      <button
        onClick={handleCartClick}
        className="delay-50 flex items-center border-none p-0.5 px-3 transition ease-linear hover:opacity-80"
      >
        {cartIcon}( {cartQty} )
      </button>
    </div>
  );
}

Navigation.propTypes = {
  cartQty: PropTypes.number,
};

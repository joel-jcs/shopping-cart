/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="item-center relative"
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <button className="mr-10 flex items-center justify-center gap-x-1.5 rounded-md border-none bg-[#181a1b] py-2 text-xl font-semibold text-white shadow-sm outline-none ring-0 transition hover:bg-[#181a1b] hover:opacity-80 focus:ring-0">
        Shop
        <svg
          className="-mr-1 h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute -left-[50px] z-10 w-56 origin-top rounded-md bg-[#181a1b] shadow-lg ring-0 transition duration-100 ease-linear">
          <div className="mx-auto py-1">
            <ul>
              <li>
                <NavLink
                  to="shop/all-items"
                  onClick={scrollToTop}
                  className="block px-4 py-2 text-base text-white"
                >
                  All Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop/mens-clothing"
                  onClick={scrollToTop}
                  className="block px-4 py-2 text-base text-white"
                >
                  Men's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop/mens-accessories"
                  onClick={scrollToTop}
                  className="block px-4 py-2 text-base text-white"
                >
                  Men's Accessories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop/womens-clothing"
                  onClick={scrollToTop}
                  className="block px-4 py-2 text-base text-white"
                >
                  Women's Clothing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop/womens-accessories"
                  onClick={scrollToTop}
                  className="block px-4 py-2 text-base text-white"
                >
                  Women's Accessories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

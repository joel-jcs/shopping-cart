import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  return (
    <div
      className="item-center relative"
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <button className="mr-10 flex items-center justify-center gap-x-1.5 rounded-md border-none bg-[#181a1b] py-2 text-xl font-semibold text-white shadow-sm outline-none ring-0 transition hover:bg-[#181a1b] hover:opacity-80 focus:ring-0">
        Store
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
                <a
                  href="#"
                  className="block px-4 py-2 text-base text-white"
                  onClick={() => handleItemClick("Men's Clothing")}
                >
                  Men's Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-base text-white"
                  onClick={() => handleItemClick("Men's Accessories")}
                >
                  Men's Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-base text-white"
                  onClick={() => handleItemClick("Women's Clothing")}
                >
                  Women's Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-base text-white"
                  onClick={() => handleItemClick("Women's Accessories")}
                >
                  Women's Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

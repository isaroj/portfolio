import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "portfolio",
  },
  {
    id: 4,
    name: "experience",
  },
  {
    id: 5,
    name: "contact",
  },
];

const NavBar = () => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  return (
    <div className="bg-black text-white flex justify-between items-center w-full h-20 fixed">
      <div>
        <h1 className="text-4xl font-signature px-3">Saroj</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="capitalize px-4 text-gray-500 hover:scale-105 hover:text-gray-100 cursor-pointer font-medium duration-300"
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div
        className="text-gray-500 cursor-pointer pr-4 md:hidden"
        onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}
      >
        {!isHamburgerOpened ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
     {
        isHamburgerOpened && ( <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 py-6 cursor-pointer capitalize text-4xl"
          >
            {link.name}
          </li>
        ))}
      </ul>)
     }
    </div>
  );
};

export default NavBar;

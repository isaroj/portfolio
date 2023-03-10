import { FaBars, FaTimes } from "react-icons/fa"
// import { Link } from "react-scroll"

type LinkType = {
  id: number,
  name: string
}

const links:LinkType[] = [
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

type ChildProps  = {
  isHamburgerOpened: boolean;
  setIsHamburgerOpened: (isOpen: boolean) => void
}

const NavBar = ({isHamburgerOpened, setIsHamburgerOpened} :ChildProps) => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <a href="/"><h1 className="text-5xl font-signature ml-2 cursor-pointer">Saroj</h1></a>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            <a href={'#'+link.name}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}
      >
        {!isHamburgerOpened ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
     {
        isHamburgerOpened && ( <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 py-6 cursor-pointer capitalize text-4xl"
          >
            <a href={'#'+link.name} onClick={()=> setIsHamburgerOpened(false)}>
              {link.name}
            </a>
            {/* <Link to={link.name} smooth={true} duration={500} onClick={()=> setIsHamburgerOpened(false)}>
            {link.name}
            </Link> */}
          </li>
        ))}
      </ul>)
     }
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import Button from "../shared/Button";

//---------------Navigation Data-----------------
const NAV_ITEMS = [
  { id: 1, name: "Home", path: "/" },
  { id: 5, name: "Services", path: "/services" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

// ----------------- Navbar Component------------------
const Navbar = () => {
  // hooks
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Taggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header>
      <nav
        className={`z-50 2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto px-3 lg:px-0 flex justify-between py-3 font-roboto font-200`}
      >
        {/* ---------- Left: Logo + Desktop Nav ------------ */}
        <div className="flex items-center gap-20">
          {/* Logo */}
          <h1 className="text-3xl">Growify</h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-5 text-[16px] font-normal">
            {NAV_ITEMS.map((navi) => (
              <Link
                className={`${pathname == navi.path && "text-pink border-b-2 border-pink"} hover:text-pink font-normal`}
                key={navi.id}
                to={navi.path}
              >
                <li className="font-rubik">{navi.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* --------- Right: Buttons + Mobile Icon ------------- */}
        <div className="flex items-center gap-5">
          <div className="space-x-3">
            {/* Buttons */}
            <Link to={"/signin"}>
              <Button name={"Login"} isIcon={true} />
            </Link>
          </div>

          {/* Mobile Taggle Icon */}
          <button onClick={toggleMenu} className="lg:hidden text-[19px]">
            {isOpen ? <IoClose className="hidden" /> : <FaBars />}
          </button>
        </div>

        {/* -------- Mobile Menu --------- */}
        <ul
          className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#d3588f] text-white w-[80%] h-full flex flex-col  gap-5 text-[19px] font-light translate-y-0 duration-300  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close Button */}
          <div className="flex justify-end items-end text-4xl cursor-pointer">
            <IoClose onClick={toggleMenu} />
          </div>

          {/* MObile Links */}
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`block hover:text-[#307bc4] 
                  ${pathname == item.path && "text-white border-b-2 border-black"}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

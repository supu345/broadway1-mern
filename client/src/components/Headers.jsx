import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Hajj-Packages",
    link: "/hajj-packages",
  },
  {
    name: "Umrah-Packages",
    link: "/umrah-packages",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

const Headers = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm px-8">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-2 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <div className="flex items-center gap-2 py-2">
                  <Link to="/">
                    <div className="flex flex-row items-center justify-center md:justify-start">
                      <img
                        className="w-[100px] h-[60px]"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>
              </Link>
            </div>

            {/* Navbar Links */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-4   space-x-6 font-bold text-gray-600">
                {NavbarLinks.map((data) => (
                  <li className="py-4" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons and Hamburger */}
            <div className="flex items-center gap-2 text-xl">
              <Link
                to="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-blue-700 text-white text-3xl bg-green-600 rounded-full p-1" />
              </Link>

              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Passing the state to ResponsiveMenu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};
export default Headers;

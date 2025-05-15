import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/logo.jpg";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Hajj-Packages", link: "/hajj-packages" },
  { name: "Umrah-Packages", link: "/umrah-packages" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Gallery", link: "/gallery" },
  { name: "Blogs", link: "/blogs" },
];

const Headers = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white md:h-[90px] backdrop-blur-md shadow-md">
      <div className="max-w-[1920px] w-full mx-auto px-4 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex justify-between items-center py-3 lg:py-5">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Logo"
                className="w-[80px] h-[50px] lg:w-[120px] lg:h-[70px] object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-base md:text-medium lg:text-lg xl:text-xl font-bold">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <NavLink
                  to={data.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-gray-700 hover:text-blue-600 transition-colors"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* WhatsApp */}
            <Link
              to="https://web.whatsapp.com/send?phone=+wa.me/8801970005000"
              target="_blank"
              rel="noopener nofollow"
              data-url="https://web.whatsapp.com/send?phone=wa.me/8801970005000"
              data-tab-setting="hover"
              data-mobile-behavior="disable"
              data-flyout="disable"
              title="WhatsApp"
            >
              {" "}
              <FaWhatsapp className="text-white text-3xl bg-green-600 rounded-full p-1 hover:scale-105 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-transform"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-transform"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu Component */}
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Headers;

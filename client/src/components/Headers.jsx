import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaUser, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/broadway-logo1.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex flex-row items-center justify-center md:justify-start">
                <img className="w-[100px] h-[60px]" src={logo} alt="logo" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 font-bold text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <Link to="/hajj-packages" className="hover:text-green-600">
                Hajj-Packages
              </Link>
              <Link to="/umrah-packages" className="hover:text-green-600">
                Umrah-Packages
              </Link>
              <Link to="/about" className="hover:text-green-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-green-600">
                Contact
              </Link>
              <Link to="/gallery" className="hover:text-green-600">
                Gallery
              </Link>
              {/* Pages Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1 hover:text-green-600"
                  onClick={togglePagesDropdown}
                >
                  Blog <MdOutlineKeyboardArrowDown />
                </button>
                {isPagesOpen && (
                  <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
                    <Link
                      to="/blog-details"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsPagesOpen(false)}
                    >
                      Blog Details
                    </Link>
                    <Link
                      to="/blogs"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsPagesOpen(false)}
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Link
                className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                to="/dashboard"
              >
                <span>
                  <FaUser />
                </span>
                <span>Name</span>
              </Link>
              <Link
                to="/login"
                className="flex cursor-pointer justify-center items-center gap-2 text-sm"
              >
                <span>
                  <FaLock />
                </span>
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden h-[450px]  text-black p-4 space-y-4">
              <Link
                to="/"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/hajj-packages"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Hajj-Packages
              </Link>
              <Link
                to="/umrah-packages"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Umrah-Packages
              </Link>
              <Link
                to="/about"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              {/* Mobile Pages Dropdown */}
              <div>
                <button
                  className="block w-full text-left hover:bg-blue-600 px-3 py-2 rounded"
                  onClick={togglePagesDropdown}
                >
                  Blog <MdOutlineKeyboardArrowDown />
                </button>
                {isPagesOpen && (
                  <div className="ml-4 space-y-2 z-10 ">
                    <Link
                      to="/blog-details"
                      className="block hover:bg-gray-200 px-3 py-1 rounded"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsPagesOpen(false);
                      }}
                    >
                      Blog Details
                    </Link>
                    <Link
                      to="/blogs"
                      className="block hover:bg-gray-200 px-3 py-1 rounded"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsPagesOpen(false);
                      }}
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Headers;

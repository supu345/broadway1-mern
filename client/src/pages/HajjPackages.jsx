import React from "react";
import Pakages from "../components/pakages";
import { Link } from "react-router-dom";
import banner6 from "../assets/banner/banner6.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import flower from "../assets/blog/flower.jpeg";
const HajjPackages = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={banner6}
          alt="image"
          className="h-[300px] w-[1400px] object-cover"
        />
        <p className="absolute bottom-4 left-4  text-white text-2xl bg-black/80 px-4 py-2 rounded">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          /{" "}
          <Link to="/hajj-packages" className="hover:text-emerald-600">
            <span>HajjPackages</span>
          </Link>
        </p>
      </div>
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="px-8"
      >
        <p className="text-3xl font-bold py-9">
          Hajj Packages 2025 from Bangladesh
        </p>
        <p>
          If you are planning for a hassle-free, comprehensive Hajj journey for
          the next year 2025 or 2026 you may contact Hijaz Hajj & Umrah Kafela
          Bangladesh. We're offering the most affordable hajj management
          services for any Bangladeshi hajjis.
        </p>
        <p className="py-6">
          The Kingdom of Saudi Arabia (KSA) higher authority has declared that
          they will allow 127,198 pilgrims from Bangladesh to perform hajj in
          the year 2025. Don't wait if you like to go for Hajj next year.
          Register your Hajj package and take the first step towards religious
          journey.
        </p>
      </motion.div>

      <div
        className="px-8 "
        style={{
          backgroundImage: `url(${flower})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.p
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="text-3xl font-bold pt-7"
        >
          Book Your Hajj Package 2025 from Bangladesh
        </motion.p>
        <motion.p
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="py-6"
        >
          Our popular Hajj packages for 2025 have been meticulously crafted to
          ensure a seamless and memorable journey. We prioritize our member's
          comfort, safety, and well-being throughout their Hajj pilgrimage,
          providing a worry-free experience.
        </motion.p>
        <div>
          <Pakages />
        </div>
      </div>
    </div>
  );
};

export default HajjPackages;

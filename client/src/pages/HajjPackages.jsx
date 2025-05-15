import React from "react";
import Pakages from "../components/pakages";
import { Link } from "react-router-dom";
import banner6 from "../assets/banner/banner6.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import flower from "../assets/blog/flower1.png";
import { Helmet } from "react-helmet";
const HajjPackages = () => {
  return (
    <div>
      <Helmet>
        <title>HajjPackages- Hajj Travel Agency</title>
        <meta
          name="description"
          content="Explore the best Hajj and Umrah packages with our trusted travel agency."
        />
        <link rel="canonical" href="https://broadwayhajj.com" />
      </Helmet>
      <div className="relative">
        <img
          src={banner6}
          alt="image"
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
        />

        <p className="absolute bottom-4 left-4 text-white text-sm sm:text-lg lg:text-2xl bg-black/70 px-3 py-1 sm:px-4 sm:py-2 rounded">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          /{" "}
          <Link to="/hajj-packages" className="hover:text-emerald-600">
            <span>Hajj Packages</span>
          </Link>
        </p>
      </div>

      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="px-4 sm:px-6 lg:px-8"
      >
        <p className="text-xl sm:text-2xl lg:text-5xl font-bold py-6 sm:py-8 lg:py-9">
          Hajj Packages 2025 from Bangladesh
        </p>
        <p className="text-sm sm:text-base lg:text-2xl leading-relaxed">
          If you are planning for a hassle-free, comprehensive Hajj journey for
          the next year 2025 or 2026 you may contact Hijaz Hajj & Umrah Kafela
          Bangladesh. We're offering the most affordable hajj management
          services for any Bangladeshi hajjis.
        </p>
        <p className="py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-2xl leading-relaxed">
          The Kingdom of Saudi Arabia (KSA) higher authority has declared that
          they will allow 127,198 pilgrims from Bangladesh to perform hajj in
          the year 2025. Don't wait if you like to go for Hajj next year.
          Register your Hajj package and take the first step towards a religious
          journey.
        </p>
      </motion.div>

      <div
        className="px-8  relative"
        style={{
          backgroundImage: `url(${flower})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute  bg-green-500/50 "></div>
        <motion.p
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="text-3xl font-bold pt-7 lg:text-3xl"
        >
          Book Your Hajj Package 2025 from Bangladesh
        </motion.p>
        <motion.p
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="py-6 lg:text-2 xl"
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

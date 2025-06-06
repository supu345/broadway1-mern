import React from "react";
import UmrahPkg from "../components/UmrahPkg";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Package8 from "../assets/packages/packages8.jpeg";
import banner7 from "../assets/banner/banner7.jpeg";
import { Helmet } from "react-helmet";

const UmrahPackages = () => {
  return (
    <div>
      <Helmet>
        <title>UmrahPackages - Hajj Travel Agency</title>
        <meta
          name="description"
          content="Explore the best Hajj and Umrah packages with our trusted travel agency."
        />
        <link rel="canonical" href="https://broadwayhajj.com" />
      </Helmet>
      <div className="relative">
        <img
          src={banner7}
          alt="image"
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
        />
        <p className="absolute bottom-4 left-4 text-white text-sm sm:text-lg lg:text-2xl bg-black/70 px-3 py-1 sm:px-4 sm:py-2 rounded">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          /
          <Link to="/umrah-packages" className="hover:text-emerald-600">
            <span>UmrahPackages</span>
          </Link>
        </p>
      </div>
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="px-8 "
      >
        <p className="text-xl sm:text-2xl md:text-lg lg:text-4xl font-bold py-6 sm:py-8 lg:py-9">
          Fully Guided Umrah Package 2025 from Bangladesh
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          The Kingdom of Saudi Arabia (KSA) higher authority has declared that
          they will allow 127,198 pilgrims from Bangladesh to perform hajj in
          the year 2025. Don't wait if you like to go for Hajj next year.
          Register your Hajj package and take the first step towards religious
          journey.
        </p>

        <div>
          <UmrahPkg />
        </div>
      </motion.div>
      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView={"visible"}
        className="px-9 py-9"
      >
        <h1 className="font-bold text-xl  md:text-3xl mb-4">
          Book Umrah Online: One-stop solution from Bangladesh
        </h1>
        {/*Book Umrah Online */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <p>
              Embarking on a fulfilling Umrah pilgrimage is now within reach for
              budget-conscious travelers with our low-price Umrah packages.
            </p>
            <br />
            <p>
              Our one-stop solutions offer comprehensive packages that cater to
              your budget, ensuring a memorable and spiritually uplifting
              journey. We understand the importance of balancing affordability
              with an enriching pilgrimage experience.
            </p>
            <br />
            <p>
              We plan our every Umrah trip with considerations for
              affordability, private transportation, & personalized attention.
            </p>
            <p className="font-bold text-3xl py-4">
              Package features and benefits:
            </p>
            <div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Umrah Visa with Insurance</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Direct Flight - SV or BG</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">
                  Premium Hotels within walking distance of 150-500MTR
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Private transportation in Saudi</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">24/7 Assistance and Guidance</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Complimentary Ziyarah Tours</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Flexible Meal Plans</p>
              </div>
            </div>
            <div className="py-6">
              <Link to="/contact">
                <button className="bg-amber-200 px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
                  Book Umrah Package{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-[150px] group">
            <img
              src={Package8}
              alt="image"
              className="w-[500px] py-6  h-[500px] rounded-tl-xl rounded-bl-xl
            md:h-[500px] rounded-lg object-cover transition-transform
            duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UmrahPackages;

import React from "react";
import { Menus } from "../utils";
import Logo from "../assets/broadway-logo.jpg";
import DesktopMenu from "../components/DesktopMenu";
import Test1 from "../assets/broadway1.png";
import MobMenu from "../components/MobMenu";
import Hero from "../components/Hero";
import Pakages from "../components/pakages";
import Imam from "../assets/imam_hossain1.jpg";
import ShariahConsultants from "../components/ShariahConsultants";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Hajj1 from "../assets/hajj2024-17.jpg";
import Hajj2 from "../assets/hajj2024-18.jpg";
import Hajj3 from "../assets/hajj2024-19.jpg";
import Hajj4 from "../assets/hajj2024-20.jpg";
import Hajj5 from "../assets/hajj2024-21.jpg";
import Hajj6 from "../assets/hajj2024-22.jpg";
import Hajj7 from "../assets/hajj2024-23.jpg";
import Hajj8 from "../assets/hajj2024-24.jpg";
import about1 from "../assets/about/about1.jpeg";
import about2 from "../assets/about/about2.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
import Services from "../components/Services";
import FAQ from "../components/faq";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Hajj Travel Agency</title>
        <meta
          name="description"
          content="Explore the best Hajj and Umrah packages with our trusted travel agency."
        />
        <link rel="canonical" href="https://broadwayhajj.com" />
      </Helmet>

      <Hero />
      {/*About */}
      <div className="px-6 py-9 flex flex-col gap-[100px] mb-9 mt-9  md:flex-row">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative w-full md:w-1/2 h-auto"
        >
          {/* Larger background image */}
          <img
            src={about1}
            alt="photo"
            className="w-full md:w-[570px] h-[350px] md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Smaller image positioned over the larger one */}
          <img
            src={about2}
            alt="photo"
            className="absolute w-[200px] md:w-[350px] h-[300px] md:h-[450px] object-cover top-12 md:top-15 left-10 md:left-70 border-[10px] md:border-[20px] border-white shadow-lg "
          />
        </motion.div>

        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="w-full md:w-1/2 mt-6 md:mt-[200px]"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl mb-5 font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-300 to-green-500">
            Broadway Tours & Travels Ltd
          </p>
          <p className="text-3xl sm:text-4xl md:text-3xl mb-5">
            Expertly organized Hajj and Umrah packages
          </p>

          <p className="text-base sm:text-lg">
            Specialized in Hajj Groups, Umrah Packages, Air Tickets, and Visa
            Services. Your journey begins with us, offering seamless travel
            planning, exclusive deals, and personalized itineraries for every
            traveler.
          </p>
        </motion.div>
      </div>
      <Pakages />
      <Services />

      {/*Dr. Imam Hossain */}
      <div className="w-full px-4 lg:px-12 xl:px-24 2xl:px-40 max-w-[1920px] mx-auto py-12">
        {/* Title */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-3xl xl:text-5xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
            Our distinguished Shariah consultant
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-center">
          {/* Image Section */}
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <img
                src={Imam}
                alt="Dr. Mufti Imam Hossain"
                className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl sm:text-4xl xl:text-5xl font-bold mb-6 font-oswald">
              Dr. Mufti Imam Hossain
            </h3>
            <motion.p
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              className="text-base sm:text-lg xl:text-xl leading-relaxed text-gray-700"
            >
              Dr. Mufti Imam Hossain, Associate Professor, is a renowned
              Bangladeshi Islamic scholar and researcher. He holds a Ph.D. in
              Islamic Studies and has authored several books on Islamic theology
              and jurisprudence. He has also contributed significantly to
              Islamic finance and economics, and has taught at various
              prestigious institutions across Bangladesh. His academic expertise
              spans Islamic law, history, and culture.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="px-6 mt-5">
        <motion.p
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="text-5xl font-bold lg:7xl text-center"
        >
          Our Gallery
        </motion.p>

        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className=""
        >
          <div className="container py-[40px] px-[40px] grid grid-cols-1 md:grid-cols-4  gap-[40px] mt-8">
            <div className="h-[280px]">
              <img
                src={Hajj1}
                className="w-full h-full  object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 1"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj2}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 2"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj3}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 3"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj4}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 4"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj5}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 4"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj6}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 4"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj7}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 4"
              />
            </div>
            <div className="h-[280px]">
              <img
                src={Hajj8}
                className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
                alt="Image 4"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Testimonial />

      <FAQ />
      <Blogs />
    </div>
  );
};

export default Home;

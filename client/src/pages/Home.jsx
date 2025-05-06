import React from "react";
import { Menus } from "../utils";
import Logo from "../assets/broadway-logo.jpg";
import DesktopMenu from "../components/DesktopMenu";
import Test1 from "../assets/broadway1.png";
import MobMenu from "../components/MobMenu";
import Hero from "../components/Hero";
import Pakages from "../components/pakages";
import ShariahConsultants from "../components/ShariahConsultants";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
// import Hajj1 from "../assets/hajj2024-17.jpg";
// import Hajj2 from "../assets/hajj2024-18.jpg";
// import Hajj3 from "../assets/hajj2024-19.jpg";
// import Hajj4 from "../assets/hajj2024-20.jpg";
// import Hajj5 from "../assets/hajj2024-21.jpg";
// import Hajj6 from "../assets/hajj2024-22.jpg";
// import Hajj7 from "../assets/hajj2024-23.jpg";
// import Hajj8 from "../assets/hajj2024-24.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <div className="px-6 py-9 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-auto group overflow-hidden">
            <img
              src={Test1}
              alt="test1"
              className="w-full h-auto object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
            />
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-[200px]">
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-3xl sm:text-4xl md:text-5xl mb-5"
            >
              Hajj & Umrah Kafela Best Agency in Bangladesh
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-base sm:text-lg"
            >
              Hajj & Umrah Kafela Bangladesh was established in January 2023.
              Aiming to provide a comprehensive and all-in-one experience for
              individuals undertaking the holy pilgrimage of Hajj and Umrah from
              any city in Bangladesh.
            </motion.p>
          </div>
        </div>

        <Pakages />

        {/* <ShariahConsultants /> */}
        <div className="px-6 mt-5">
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            className="text-5xl font-bold  text-center"
          >
            Our Gallery
          </motion.p>

          {/* <div className="dark:bg-black dark:text-white">
            <div className="container py-[40px] px-[40px] grid grid-cols-1 md:grid-cols-4  gap-[40px] mt-8">
              <div className="h-[280px]">
                <img
                  src={Hajj1}
                  className="w-full h-full object-cover border p-1 transform transition duration-300 ease-in-out hover:scale-110"
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
          </div> */}
        </div>
        <Testimonial />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;

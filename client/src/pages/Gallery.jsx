import React from "react";
import Hajj1 from "../assets/hajj2024-1.jpg";
import Hajj2 from "../assets/hajj2024-2.jpg";
import Hajj3 from "../assets/hajj2024-3.jpg";
import Hajj4 from "../assets/hajj2024-4.jpg";
import Hajj5 from "../assets/hajj2024-5.jpg";
import Hajj6 from "../assets/hajj2024-6.jpg";
import Hajj7 from "../assets/hajj2024-7.jpg";
import Hajj8 from "../assets/hajj2024-8.jpg";
import Hajj9 from "../assets/hajj2024-9.jpg";
import Hajj10 from "../assets/hajj2024-10.jpg";
import Hajj11 from "../assets/hajj2024-11.jpg";
import Hajj12 from "../assets/hajj2024-12.jpg";
import Hajj13 from "../assets/hajj2024-13.jpg";
import Hajj14 from "../assets/hajj2024-14.jpg";
import Hajj15 from "../assets/hajj2024-15.jpg";
import Hajj16 from "../assets/hajj2024-16.jpg";
import banner4 from "../assets/packages/banner4.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Gallery = () => {
  return (
    <div>
      {/* Top Section */}
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative flex flex-col items-center">
          <p className="text-center  text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-300 to-green-500">
            Gallery
          </p>
        </div>
        {/* <p className="absolute bottom-4 left-4 text-white text-lg md:text-2xl bg-black/80 px-4 py-2 rounded">
                Home / HajjPackages
              </p> */}
      </div>
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className=""
      >
        <div className="container py-[80px] px-[40px] grid grid-cols-1 md:grid-cols-4  gap-[40px] mt-8">
          <div className="h-[280px]">
            <img
              src={Hajj1}
              className="w-full h-full object-cover border p-1"
              alt="Image 1"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj2}
              className="w-full h-full object-cover border p-1"
              alt="Image 2"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj3}
              className="w-full h-full object-cover border p-1"
              alt="Image 3"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj4}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj5}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj6}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj7}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj8}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj9}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj10}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj11}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj12}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj13}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj14}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj15}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div className="h-[280px]">
            <img
              src={Hajj16}
              className="w-full h-full object-cover border p-1"
              alt="Image 4"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;

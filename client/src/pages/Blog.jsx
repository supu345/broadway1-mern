import React from "react";
import Blogs from "../components/Blogs";
import banner9 from "../assets/banner/banner9.jpeg";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <div>
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView={"visible"}
        className="relative bg-fixed h-[300px] bg-cover bg-center flex
  items-center justify-center"
        style={{
          backgroundImage: `url(${banner9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center">
          <p className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-300 to-green-500 leading-tight">
            Blog
          </p>
        </div>
      </motion.div>

      <Blogs />
    </div>
  );
};

export default Blog;

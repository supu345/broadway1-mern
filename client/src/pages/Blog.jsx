import React from "react";
import Blogs from "../components/Blogs";
import banner9 from "../assets/banner/banner9.jpeg";
const Blog = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-white text-7xl font-bold">Blog</p>
        </div>
      </div>

      <Blogs />
    </div>
  );
};

export default Blog;

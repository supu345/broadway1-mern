import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Blogs = () => {
  return (
    <div className="px-6 py-9 ">
      <div className="text-center">
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView={"visible"}
        >
          <button className="border p-2 px-4 rounded-full mb-8">
            News & Article
          </button>
        </motion.p>
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView={"visible"}
        >
          <p className="text-5xl font-bold  text-center">
            Stay Informed & Inspired <br />
            With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
              Our Latest Blogs.{" "}
            </span>
          </p>
          <p className="py-7">
            Dedicated to providing exceptional service from the moment you
            inquire about our <br />
            packages to completion of your pilgrimage.
          </p>
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 ">
        <div className="">
          <img
            src="https://images.pexels.com/photos/18351141/pexels-photo-18351141/free-photo-of-crowd-of-pilgrims-around-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="text-2xl font-semibold py-4">
              The Surprising Benefits of Embracing Minimalism
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sapiente reprehenderit vitae, magnam ullam quas!
              Similique obcaecati nam fugit.
            </p>
            <Link to="/blog-details">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </motion.p>
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/27628044/pexels-photo-27628044/free-photo-of-the-mosque-is-surrounded-by-green-and-white-domes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="text-2xl font-semibold py-4">
              The Surprising Benefits of Embracing Minimalism
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sapiente reprehenderit vitae, magnam ullam quas!
              Similique obcaecati nam fugit.
            </p>
            <Link to="/blog-details">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </motion.p>
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/25912576/pexels-photo-25912576/free-photo-of-close-up-of-the-pages-of-quran.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="text-2xl font-semibold py-4">
              The Surprising Benefits of Embracing Minimalism
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sapiente reprehenderit vitae, magnam ullam quas!
              Similique obcaecati nam fugit.
            </p>

            <Link to="/blog-details">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

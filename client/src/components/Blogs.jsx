import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import blog2 from "../assets/blog2.jpg";
import blog1 from "../assets/blog1.jpg";
import blog3 from "../assets/blog3.jpg";
const Blogs = () => {
  return (
    <div className="px-6 py-9 ">
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="text-center"
      >
        <p>
          <button className="border p-2 px-4 rounded-full mb-8">
            News & Article
          </button>
        </p>
        <p>
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
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 ">
        {/* div-1 */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
        >
          <img
            src={blog2}
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />
          <div>
            <p className="text-lg font-semibold py-4">
              ইহরাম করা ও ইহরাম পরা কি একই বিষয় ?
            </p>
            <p>
              অনেক হজ্জযাত্রী মনে করেন, ইহরামের কাপড় পরা মানেই ইহরাম বেঁধে ফেলা।
              কিন্তু বাস্তবে এই দুটি বিষয় আলাদা।
            </p>
            <Link to="/blog-details">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </div>
        </motion.div>

        {/* div-2 */}
        <motion.div
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView={"visible"}
        >
          <img
            src={blog1}
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />
          <p variants={SlideUp(0.7)} initial="hidden" whileInView={"visible"}>
            <p className="text-lg font-semibold py-4">
              হজযাত্রা: বিমানে ওঠার পূর্বে আপনার করণীয়।
            </p>
            <p>
              আপনি যদি ঢাকা–জেদ্দা রুটে ভ্রমণ করেন, তাহলে বিমানে ওঠার আগেই
              ইহরামের কাপড় পরিধান করুন। বিমানের ভেতরে এটি পরা কষ্টকর হবে।
            </p>
            <Link to="/blog-details-two">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </p>
        </motion.div>
        {/* div-3 */}
        <motion.div
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView={"visible"}
          className=""
        >
          <img
            src={blog3}
            alt="image"
            className="rounded-2xl w-[400px] h-[300px] object-cover transform transition duration-300 ease-in-out  hover:scale-95"
          />

          <p>
            <p className="text-lg font-semibold py-4">
              ব্রডওয়ে ট্যুরস অ্যান্ড ট্রাভেলস লিমিটেড-এর ২০২৫ সালের হাজীদের জন্য
              হজ্জ প্রশিক্ষণ কার্যক্রম শুরু হয়েছে।
            </p>
            <p>প্রশিক্ষণ প্রদান করেন—</p>
            <p>আমাদের সম্মানিত শারীয়াহ কনসালটেন্ট শাইখ ড. ইমাম হোসেন</p>
            <p>
              আমিনাহ কুরআন শিক্ষা, গবেষণা ও প্রশিক্ষণ কেন্দ্রের পরিচালক জনাব
              জাহিদুর রহমান
            </p>

            <Link to="/blog-details-three">
              <button className="uppercase font-bold py-8 text-blue-700 cursor-pointer hover:text-amber-800">
                Read full blog
              </button>
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;

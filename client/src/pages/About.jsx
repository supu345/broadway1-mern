import React from "react";
import Muhmud1 from "../assets/mahmud1.jpg";
import mahmud from "../assets/mahmud.jpg";
import Jaffar from "../assets/Jaffar.jpg";
import Avater from "../assets/avatar.jpg";
import Blogs from "../components/Blogs";
import banner8 from "../assets/banner/banner8.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import madina from "../assets/about/madina.jpeg";
import flower1 from "../assets/about/flower1.jpg";

const About = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-black text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-300 to-green-500">
            About
          </p>
        </div>

        {/* <p className="absolute bottom-4 left-4 text-white text-2xl bg-black/80 px-4 py-2 rounded">
          Home / HajjPackages
        </p> */}
      </div>
      <div className="flex flex-row gap-6 mt-[100px] px-4 py-9">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-1/2"
        >
          <img
            src={madina}
            alt="image"
            className="h-[600px] w-[600px] rounded-xl object-cover"
          />
        </motion.div>
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="w-1/2 pl-6 "
        >
          <button className="border px-4 py-1 rounded-full uppercase font-small">
            Our peace vision
          </button>
          <p className="text-5xl font-bold mt-6">
            Hajj & Umrah Experiences: Tailored To Travel Solutions.
          </p>
          <div className="flex flex-row gap-2 mt-[50px] ">
            <div className="w-1/2">
              <img
                src={Muhmud1}
                alt="photo1"
                className="h-[350px] w-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="w-1/2">
              <div>
                <p className="text-3xl font-bold">Our Vision</p>

                <p>
                  We understand the significance of hajj and umrah in the lives
                  of muslims worldwide.{" "}
                </p>
              </div>

              <div className="mt-7">
                <p className="text-3xl font-bold">Our Mission</p>

                <p>
                  We understand the significance of hajj and umrah in the lives
                  of muslims worldwide.{" "}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Book Your Hajj Packages Today */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-black"
        style={{
          backgroundImage: `url(${flower1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        {/* Content */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="relative  flex flex-col py-9"
        >
          {/* Logo and About Section */}
          <div className="text-center ">
            <div className="flex flex-col gap-3  ">
              <p className="text-5xl font-bold ">
                Book Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
                  Hajj Packages{" "}
                </span>{" "}
                Today
              </p>
              <p>
                Embark on a spiritual journey with our tailored Hajj packages,
                offering exceptional
                <br />
                services for a seamless pilgrimage experience.
              </p>
            </div>
            <div className="flex flex-row gap-6 px-[450px]">
              <div className="py-6">
                <button className="bg-green-200 px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
                  Contact Now
                </button>
              </div>
              <div className="py-6">
                <button className="border border-amber-950 px-5 py-2 rounded-full font-semibold hover:text-amber-700">
                  +01799-224466
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Book Your Hajj Packages Today */}

      <div className="px-9 py-9">
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="py-6 text-center"
        >
          <button className="uppercase border border-amber-950 px-5 py-2 rounded-full font-semibold hover:text-amber-700">
            OUR TEAM MEMBER
          </button>

          <p className="text-5xl font-bold mt-7 ">
            Meet the experts behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
              our success.{" "}
            </span>
          </p>
          <p className="mt-7 ">
            Dedicated and skilled team member with expertise in collaboration,
            problem-solving, <br />
            and delivering high-quality results in dynamic environments
          </p>
        </motion.div>
      </div>

      {/* portfolio */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3"
      >
        <div className="text-center">
          <img
            src={mahmud}
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">mahmud</p>
            {/* <p>Operations Manager</p> */}
          </div>
        </div>
        <div className="text-center">
          <img
            src={Jaffar}
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Emily Carter</p>
            <p>Operations Manager</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src={Avater}
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">monir</p>
            <p>Quality Control Supervisor</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src={Avater}
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Selim</p>
            <p>Team Leader</p>
          </div>
        </div>
      </motion.div>
      {/* Blogs */}
      <Blogs />
    </div>
  );
};

export default About;

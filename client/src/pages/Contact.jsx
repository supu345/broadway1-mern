import React from "react";
import NumberCounter from "../components/NumberCounter";
import Hajj24 from "../assets/hajj2024-24.jpg";
import banner4 from "../assets/packages/banner4.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Contact = () => {
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
            Contact Our Agency
          </p>
        </div>
        {/* <p className="absolute bottom-4 left-4 text-white text-lg md:text-2xl bg-black/80 px-4 py-2 rounded">
          Home / HajjPackages
        </p> */}
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 px-4">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full md:w-1/2  "
        >
          <img src={Hajj24} alt="" className="rounded-2xl" />
        </motion.div>

        <motion.form
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          action="https://getform.io/f/bxooowga"
          method="POST"
          className="w-full md:w-1/2 bg-gray-100 rounded-lg border
            border-blue-300 shadow-lg shadow-blue-500 p-10"
        >
          <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name" // Add this
              id="name"
              placeholder="Full Name"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Map Section */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="flex flex-col md:flex-row gap-4 mt-10 px-4 py-5"
      >
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.717576295238!2d90.40253157533724!3d23.79306937864134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74ea4ff69b7%3A0x64e7e118b44be1!2sBroadway%20Tours%20%26%20Travels!5e0!3m2!1sen!2sbd!4v1746085615711!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:px-9 md:w-1/2 flex flex-col justify-center">
          <p className="text-xl md:text-3xl font-bold">
            Broadway Tours & Travels
          </p>
          <p className="mt-2 w-1/2">
            Park Plaza, Suite N4 (4th Floor), Plot 31, Road 17, Banani, Dhaka,
            Bangladesh, 1213
          </p>
          <p className="mt-2">01799-224466</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

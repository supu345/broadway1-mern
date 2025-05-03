import React from "react";
import NumberCounter from "../components/NumberCounter";

const Contact = () => {
  return (
    <div>
      {/* Top Section */}
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/arabic-ornamental-background-paper-style_23-2148877288.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative flex flex-col items-center">
          <p className="text-center text-black text-4xl md:text-6xl font-bold">
            Contact Our Agency
          </p>
        </div>
        {/* <p className="absolute bottom-4 left-4 text-white text-lg md:text-2xl bg-black/80 px-4 py-2 rounded">
          Home / HajjPackages
        </p> */}
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-10 px-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="py-6">
            <button className="border px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
              Book the Travel
            </button>
            <p className="text-3xl md:text-5xl font-bold mt-4">
              Looking For Cheap Packages? You Are At <br />
              <span className="text-amber-600">The Right Place.</span>
            </p>
            <p className="mt-6 text-sm md:text-base">
              We prioritize customer satisfaction and strive to exceed
              expectations with attention to detail & commitment.
            </p>
          </div>
          <NumberCounter />
        </div>

        {/* Right Section */}
        <div className="bg-sky-100 rounded-2xl w-full md:w-1/2 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Email Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Phone Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Location</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Select location"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="uppercase text-sm">Comments / Questions</label>
            <textarea
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your description ..."
              rows="4"
            />
          </div>
          <button
            type="button"
            className="w-full md:w-[200px] font-bold bg-sky-500 text-white rounded-full px-5 py-3 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Message
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-10 px-4 py-5">
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
      </div>
    </div>
  );
};

export default Contact;

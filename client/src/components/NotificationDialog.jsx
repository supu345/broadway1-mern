import React from "react";
import Notifi from "../assets/blog/notification.jpg";
import logo from "../assets/broadway-logo.jpg";
const NotificationDialog = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Do not render the dialog if it's not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Notification Content */}
        <div className=" items-center space-x-4 mb-4">
          <div className="p-3 ">
            <img src={logo} alt="image" className="h-14 w-14" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m6.938 2A10.013 10.013 0 0112 21a10.013 10.013 0 01-6.938-2M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg> */}
          </div>
          {/* <h2 className="text-lg font-bold text-gray-800">
            Get notifications from us?
          </h2> */}
        </div>
        {/* <p className="text-sm text-gray-600 mb-6">
          Don't miss out on exciting new products and incredible offers.
        </p> */}
        <div>
          <img src={Notifi} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;

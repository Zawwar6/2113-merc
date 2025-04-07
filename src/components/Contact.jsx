// ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center mt-6 sm:mt-0 p-4 sm:p-6 md:p-16 gap-40 font-sans">
      
      {/* Left side content */}
      <div className="md:w-[30%] space-y-6">
        <h1 className="text-3xl my-4 sm:my-0 sm:text-7xl font-extrabold boldo gap-3 text-gray-900 leading-tight">
          CONTACT <br/> US
        </h1>
        <p className="text-lg text-gray-700 font-medium max-w-md">
          Interested in working together? Fill out some info and we will be in touch shortly.
          <br />
          <span className="text-gray-900 font-semibold">We can’t wait to hear from you!</span>
        </p>
      </div>

      {/* Right side form */}
      <div className="md:w-1/2 w-full bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-8 space-y-6 border border-gray-200">
        
        {/* Name Fields */}
        <div>
          <label className="block text-gray-800 font-semibold text-sm mb-1">
            Name <span className="text-gray-500">(required)</span>
          </label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 rounded-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all shadow-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 rounded-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-800 font-semibold text-sm mb-1">
            Email <span className="text-gray-500">(required)</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all shadow-sm"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-800 font-semibold text-sm mb-1">
            Message <span className="text-gray-500">(required)</span>
          </label>
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="w-full rounded-2xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none resize-none transition-all shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold text-lg py-3 px-10 rounded-full transition-all shadow-md hover:shadow-lg">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

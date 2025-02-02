import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatWeDo from "./WhatWeDo";
import Trial from "./Trial";

function Services() {
  return (
    <>
      <br />
      <Navbar />
      <WhatWeDo />
      <br />
      <div className="container px-4 mx-auto mt-24 max-w-screen-2xl md:px-20">
        <div className="relative">
          {/* Box with Custom Border Shadow */}
          <div
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-800"
            style={{
              boxShadow:
                "1px 1px 5px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
              {/* Left Side Content */}
              <div className="md:w-2/3">
                <h1 className="text-4xl text-gray-800 dark:text-gray-100">
                  Start Your <b className="text-pink-500">One Month</b> Free
                  Trial
                </h1>

                {/* <div className="flex flex-wrap items-center gap-6 mt-4"> */}
                <br />
                <div className="flex items-center gap-2">
                  {/* Checkmark Icon */}
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                    ✓
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    <strong>No credit card required</strong>
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  {/* Checkmark Icon */}
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                    ✓
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Support <strong>24/7</strong>
                  </p>
                </div>
              </div>

              {/* Right Side Button */}
              <div className="flex justify-end mt-6 md:mt-0 md:w-1/3">
                <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  <a href="/Trial">Request Free Trial</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;

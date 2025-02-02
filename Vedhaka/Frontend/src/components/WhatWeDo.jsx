import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

function WhatWeDo() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container px-4 mx-auto mt-24 max-w-screen-2xl md:px-20">
        <div>
          <h1 className="text-4xl font-semibold text-center text-pink-500 font-poppins">
            What We Do
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-center text-black font-poppins dark:text-white">
            We make Performance marketing easier by offering products made to:
          </p>

          <br />
          <br />
          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Track Performance */}
            <div className="p-6 transition-transform transform bg-gray-100 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 hover:bg-black hover:shadow-2xl group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-4 text-pink-500">
                  {/* Replace with an icon, for example using Font Awesome */}
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold group-hover:text-pink-500">
                  Track Performance
                </h3>
              </div>
              <p className="mt-4 text-gray-500 font-poppins dark:text-white group-hover:text-white">
                Gain real-time visibility into clicks, conversions, revenue, and
                more.
              </p>
            </div>

            {/* Optimize Campaigns */}
            <div className="p-6 transition-transform transform bg-gray-100 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 hover:bg-black hover:shadow-2xl group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-4 text-pink-500">
                  {/* Replace with an icon, for example using Font Awesome */}
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold group-hover:text-pink-500 ">
                  Optimize Campaigns
                </h3>
              </div>
              <p className="mt-4 text-gray-500 font-poppins dark:text-white group-hover:text-white">
                Leverage advanced analytics and insights to fine-tune your
                strategies.
              </p>
            </div>

            {/* Streamline Management */}
            <div className="p-6 transition-transform transform bg-gray-100 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 hover:bg-black hover:shadow-2xl group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-4 text-pink-500">
                  {/* Replace with an icon, for example using Font Awesome */}
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold group-hover:text-pink-500">
                  Streamline Management
                </h3>
              </div>
              <p className="mt-4 text-gray-500 font-poppins dark:text-white group-hover:text-white">
                Manage partnerships, payouts, and reports from a single
                platform.
              </p>
            </div>
            <div className="p-6 transition-transform transform bg-gray-100 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 hover:bg-black hover:shadow-2xl group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-4 text-pink-500">
                  <i className="fas fa-arrow-up"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold group-hover:text-pink-500">
                  Scale with Confidence
                </h3>
              </div>
              <p className="mt-4 text-gray-500 font-poppins dark:text-white group-hover:text-white">
                Use our scalable infrastructure to grow alongside your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default WhatWeDo;

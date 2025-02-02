import React from "react";
import Navbar from "./Navbar"; // Adjust the path as per your folder structure
import Footer from "./Footer";
import Signup from "./Signup";
import GetConnected from "./GetConnected";
import Trial from "./Trial";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pricing Section */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 text-center max-w-screen-2xl">
          {/* Header */}
          <br />
          <br />
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Start <span className="text-pink-500">30 days</span> Free Trial.
          </h1>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-400">
            Experience all the premium features risk-free for{" "}
            <span className="font-bold text-pink-500">30 days free trial</span>{" "}
            & unlock your marketing potential.
          </p>

          {/* Pricing Cards */}
          <div className="flex flex-col items-center justify-center mt-10 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {/* Basic Plan */}
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Basic
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Click Based
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                $37
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>
              <div className="w-full px-4 py-2 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <Link
                  to="/Trial"
                  className
                  style={{ width: "190px", height: "50px" }}
                >
                  Signup now
                </Link>
              </div>
              <ul className="mt-6 space-y-3 text-left">
                <li className="flex items-center">✅ 4,000 Conversions</li>
                <li className="flex items-center">✅ 150,000 Clicks</li>
                <li className="flex items-center">✅ Unlimited Offers</li>
              </ul>
            </div>

            {/* Advanced Plan */}
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Advanced
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Conversion Based
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                $109
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>
              <div className="w-full px-4 py-2 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <Link
                  to="/Trial"
                  className
                  style={{ width: "190px", height: "50px" }}
                >
                  Signup now
                </Link>
              </div>
              <ul className="mt-6 space-y-3 text-left">
                <li className="flex items-center">✅ 10,000 Conversions</li>
                <li className="flex items-center">✅ Unlimited Offers</li>
                <li className="flex items-center">✅ Unlimited Clicks</li>
              </ul>
            </div>

            {/* Business Plan */}
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Business
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Conversion Based
              </p>
              <p className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                $249
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>
              <div className="w-full px-4 py-2 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <Link
                  to="/Trial"
                  className
                  style={{ width: "190px", height: "50px" }}
                >
                  Signup now
                </Link>
              </div>
              <ul className="mt-6 space-y-3 text-left">
                <li className="flex items-center">✅ 40,000 Conversions</li>
                <li className="flex items-center">✅ Unlimited Clicks</li>
                <li className="flex items-center">✅ Unlimited Offers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Enterprise Plan - Landscape Layout */}
      <div className="flex items-center justify-center py-2 bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-screen-xl px-1 text-center">
          {/* Landscape Layout for Enterprise Plan */}
          <div className="flex flex-col items-center justify-between p-10 bg-white rounded-lg shadow-lg md:flex-row dark:bg-gray-800 hover:bg-gray-200">
            {/* Left side: Plan Details */}
            <div className="w-full p-6 text-left md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Bespoke (Enterprise)
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Chat with an expert to get a custom plan tailored to your needs.
              </p>
              <p className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact for Pricing
              </p>
              <div>
                {/* <button className="px-6 py-3 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700" >
                Contact Us
              </button> */}
                <br />
                <Link
                  to="/GetConnected"
                  className="px-8 py-3 text-white bg-indigo-600 rounded-lg mt mt- hover:bg-indigo-700"
                  style={{ width: "190px", height: "50px" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right side: Features */}
            <div className="w-full p-6 text-left md:w-1/2">
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ Custom No. of Clicks
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ Custom No. of Conversions
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ Custom No. of Impressions
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ Custom Features
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ Yearly/Monthly Contract
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                  ✅ 24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <Signup /> */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Pricing;

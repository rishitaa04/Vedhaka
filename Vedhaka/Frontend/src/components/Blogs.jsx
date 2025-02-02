import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto mt-32 max-w-screen-2xl md:px-20">
        <div className="flex flex-col p-6 text-center bg-white rounded-lg">
          {/* About Us Section */}
          <div className="w-full mb-6 text-4xl font-semibold text-center text-pink-500">
            OUR STORY
          </div>
          <br />
          {/* Content Section */}
          <div className="w-full mb-8 text-lg leading-relaxed text-gray-700">
            <p className="mb-4">
              Vedhaka was born out of a vision to bridge the gap between
              innovative technology and effective marketing. Backed by years of
              expertise in performance advertising, we’ve worked across diverse
              verticals like real estate, automobiles, fintech, insurance,
              casino, and gaming. These experiences helped us identify the
              common hurdles faced by businesses and affiliates, inspiring us to
              create a platform that offers clarity, precision, and
              growth-focused features.
            </p>
            <p className="mb-4">
              Our name,{" "}
              <span className="text-2xl font-semibold text-pink-600">
                "Vedhaka"
              </span>
              , signifies a guiding force—a tool that enables marketers to
              navigate challenges and chart a path to success. Today, we’re
              proud to be a trusted partner for brands, agencies, and affiliates
              worldwide.
            </p>
          </div>
        </div>

        {/* Last Line Centered at the Bottom */}
        <div className="mt-12 text-center text-black">
          We're here to help you succeed in the performance marketing world.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;

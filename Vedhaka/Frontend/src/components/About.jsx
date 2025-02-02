import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="container px-4 mx-auto mt-24 max-w-screen-2xl md:px-20">
        <div className="flex p-6 bg-gray-200 rounded-lg shadow-lg">
          {/* About Us Section */}
          <div className="w-1/4 ml-8 text-4xl font-semibold text-left text-pink-500">
            ABOUT US
            <div className="mt-8">
              <img
                src="/consulting.gif"
                alt="Consulting"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-2/3 text-lg leading-relaxed text-gray-700 dark:text-black mt-9">
            <p>
              Welcome to <span className="text-pink-500">Vedhaka</span>, your
              trusted partner in simplifying and optimizing affiliate marketing.
              We are a technology-driven company that aims to transform how
              businesses, marketers, and affiliates manage and grow their
              partnerships. We believe that the right tools can empower
              businesses to unlock their full potential in the competitive
              digital landscape.
            </p>
            <br />
            <p>
              <span className="text-pink-500">We</span> deliver just that—a
              powerful affiliate tracking software designed to streamline
              operations, enhance performance, and drive revenue growth.
              <br />
              With a deep understanding of the challenges that come with
              affiliate marketing, we’ve developed a platform that combines
              cutting-edge technology with intuitive user experience. Whether
              you’re a brand looking to scale or an affiliate seeking
              transparency and efficiency.
            </p>
            <br />
            <hr />
          </div>
        </div>

        {/* Last Line Centered at the Bottom */}
        
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;

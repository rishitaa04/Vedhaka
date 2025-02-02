import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import banner from "../../public/Banner.gif";

function Banner() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/getconnected"); // Navigate to the GetConnected route
  };

  return (
    <>
      <div className="container flex flex-col px-4 mx-auto my-10 max-w-screen-2xl md:px-20 md:flex-row">
        <div className="order-2 w-full mt-12 md:order-1 md:w-1/2 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl font-bold md:text-5xl">
              From Clicks to <br />
              Conversions, Manage
              <br /> It All{" "}
              <span className="text-pink-500 "> with Vedhaka </span>
            </h1>
            <br />
            <br />
            <p className="font-light tracking-wide text-black-500 text-m md:text-l">
              <span className="text-sm font-bold text-gray-550 md:text-2xl">
                {" "}
                A Performance Marketing Platform
              </span>{" "}
              crafted to empower affiliates, advertisers, and ad networks, our
              cutting-edge performance marketing software redefines the way you
              track, optimize, and measure network success. Equipped with
              unparalleled tools and insights.
            </p>
          </div>
          <button
            className="px-4 py-2 mt-4 text-white bg-pink-500 rounded-md hover:bg-pink-600"
            onClick={handleClick}
          >
           Let's Get Connected
          </button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

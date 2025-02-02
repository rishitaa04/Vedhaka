import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import About from "./About";

import axios from "axios";

import Cards from "./Cards";
import { Link } from "react-router-dom";
function Freebook() {
  return (
    <>
      <br />
      <br />
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div>
          <br />
          <div className="relative">
            {/* Box Border */}
            <div className="p-6 shadow-md">
              <h1 className="text-4xl font-semibold text-center ">
                Achieve Superior Results with Our Advanced Features
              </h1>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-center text-gray-700 mt-9 dark:text-gray-300">
            Harness the power of AI-driven insights to elevate your performance
            and maximize partner marketing outcomes. Stay ahead of the
            competition with cutting-edge, industry-leading features. Simplify
            your marketing operations with tools meticulously.
            <br />
            <br />
            Vedhaka, which offers performance marketing management software,
            serves a range of sectors that gain the most from this strategy.
            Leveraging guarantees steady growth and reliable returns for
            affiliate networks, agencies, and independent companies.
          </p>
        </div>
      </div>
      <About />
    </>
  );
}
export default Freebook;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

function GetConnected() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      message: data.message,
      notRobot: data.notRobot,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Form Submitted Successfully");
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between h-screen">
        {/* Left side with text */}
        <div className="flex flex-col justify-center w-1/2 h-full px-8">
          <h1 className="text-5xl font-bold text-gray-800">
            Join Us on This <span className="text-pink-500">Journey !!!</span>
            
          </h1>
          <br />
          <br />
          <br />
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            At <span className="text-2xl font-bold text-pink-500"> Vedhaka </span>,
            we’re more than just a software provider. We’re your dedicated
            partners in success, deeply committed to helping you overcome
            challenges and achieve your goals.
            <br />
            <br />
            Join us as we redefine the affiliate marketing ecosystem—creating a
            world where businesses, affiliates, and marketers seamlessly
            collaborate, innovate, and grow together.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              {/* Checkmark Icon */}
              {/* <div className="flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                ✓
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong>No credit card required</strong>
              </p>
            </div> */}
              {/* <div className="flex items-center gap-2"> */}
              {/* Checkmark Icon */}
              {/* <div className="flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                ✓
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Support <strong>24/7</strong>
              {/* </p> */}
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="flex items-center justify-center w-1/2 h-full mt-20">
          <div className="w-[520px]">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* Close button */}
                <Link
                  to="/"
                  className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                >
                  ✕
                </Link>

                <h3 className="text-3xl font-bold text-pink-500">
                  Connect Now
                </h3>

                {/* Full Name */}
                <div className="mt-6 space-y-2">
                  <span className="dark:text-black">
                    Name <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="px-3 py-1 border rounded-md outline-none w-[400px]"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Email <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-1 border rounded-md outline-none  w-[400px]"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Phone Number <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="px-3 py-1 border rounded-md outline-none  w-[400px]"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Message <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <textarea
                    placeholder="Enter your message"
                    className="px-3 py-1 border rounded-md outline-none w-[400px] h-[100px]"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* I'm not a robot */}
                <div className="mt-4 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("notRobot", { required: true })}
                    />
                    <span className="dark:text-black">I'm not a robot</span>
                  </label>
                  {errors.notRobot && (
                    <span className="text-sm text-red-500">
                      Please confirm you are not a robot
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                  <button className="px-24 py-3 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                    Get in Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GetConnected;

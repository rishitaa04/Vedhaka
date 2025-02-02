import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import banner from "../../public/upworks.gif";
import Footer from "./Footer";

function Signup() {
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
      company: data.company,
      skype: data.skype,
      plan: data.plan,
      termsAccepted: data.termsAccepted,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate("/", { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
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
      {/* Include the Navbar */}
      <Navbar />
      <br />
      <br />
      <br />
      <div className="flex items-center justify-between h-screen">
        {/* Left side with image */}
        <div className="w-1/2 h-full bg-white-200">
          <img
            src="upworks.gif" // Use your image URL here
            alt="Signup Image"
            className="object-cover mt-24 ml-60 w-[380px] h-[400px]"
          />
        </div>

        {/* Right side with form */}
        <div className="flex items-center justify-center w-1/2 h-full">
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
                <div className="mt-4 space-y-2">
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
                  <br />
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
                  <br />
                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Company <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="px-3 py-1 border rounded-md outline-none  w-[400px]"
                    {...register("company", { required: true })}
                  />
                  <br />
                  {errors.company && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Skype Address */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Skype Address <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Skype address"
                    className="px-3 py-1 border rounded-md outline-none  w-[400px]"
                    {...register("skype", { required: true })}
                  />
                  <br />
                  {errors.skype && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Plan Selection */}
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">
                    Choose a Plan <span className="text-red-500">*</span>
                  </span>
                  <br />
                  <select
                    className=" dark:text-black px-3 py-1 border rounded-md outline-none  w-[400px]"
                    {...register("plan", { required: true })}
                  >
                    <option value="">Select Plan</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Advanced</option>
                    <option value="enterprise">Business</option>
                  </select>
                  <br />
                  {errors.plan && (
                    <span className="text-sm text-red-500">
                      Please select a plan
                    </span>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="mt-4 ">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("termsAccepted", { required: true })}
                    />
                    <span className="dark:text-black">
                      I accept the{" "}
                      <a href="/terms" className="text-blue-500">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-blue-500">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  <br />
                  {errors.termsAccepted && (
                    <span className="text-sm text-red-500">
                      You must accept the terms and conditions
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-1">
                  <button className="px-24 py-3 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                    Signup
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

export default Signup;

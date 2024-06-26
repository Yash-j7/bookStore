import React from "react";
import banner from "../assets/banner.jpg";
import { animateScroll } from "react-scroll";

function Banner() {
  const handleClick = () => {
    const options = {
      // Your options here, for example:
      duration: 500,
      smooth: true,
      //delay: 1000,
    };
    animateScroll.scrollTo(1800, options);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-10 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="text-4xl mt-36">
          Welcome Back,learn something{" "}
          <span className="text-purple-600">new everyday</span>
          <p className="text-xl mt-5">
            We're thrilled to have you return to our e-book haven. Dive into our
            extensive collection of e-books, spanning a multitude of genres and
            subjects. Whether you're looking to immerse yourself in a gripping
            novel, expand your knowledge on a new topic, or find inspiration,
            there's always something new to discover. Let's embark on this
            literary journey together!
          </p>
          <h1 className="text-2xl text-purple-500 mt-5">
            Signin to explore more
          </h1>
          <label className=" border mt-10 flex items-center gap-2 dark:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow outline-none border text-lg"
              placeholder="Email"
            />
          </label>
          <button
            onClick={handleClick}
            className="btn btn-active rounded-xl hover:text-black  bg-fuchsia-700 text-white mt-5"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 mt-36 ">
        <img
          src={banner}
          alt=""
          className="w-[200] rounded-3xl p-5 md:ml-4 h-92"
        />
      </div>
    </div>
  );
}

export default Banner;

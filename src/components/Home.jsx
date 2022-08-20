import React from "react";
import heroImage from "../assets/heroImage1.png";
import { CgArrowRightO } from "react-icons/cg";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
       from-black via-black to-gray-800 "
    >
      <div
        className=" max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row pt-20"
      >
        <div className="flex flex-col justify-center h-auto ">
          <p className="group text-white font-bold cursor-pointer">
            <span className="group-hover:text-gray-600 duration-300 ">Hi</span>,
            my name is
          </p>

          <h2 className=" text-3xl text-white font-semibold pr-3 cursor-pointer">
            <span className="group pr-3">
              <span className="group-hover:text-gray-600 duration-300 ">M</span>
              essahel
            </span>
            <span className="group pr-3">
              <span className="group-hover:text-gray-700 duration-300 ">S</span>
              amy
            </span>
            <span className=" group">
              <span className="group-hover:text-gray-700 duration-300 ">S</span>
              alaheddine
            </span>
          </h2>

          <h2 className="text-4xl sm:text-7xl font-bold text-white cursor-pointer">
            <span className=" hover:text-gray-700 duration-300 pr-3 ">I'm</span>
            <span className=" hover:text-gray-700 duration-300 pr-3">a</span>
            <span className=" hover:text-gray-700 duration-300 italic pr-3">
              future
            </span>
            <span className=" hover:text-gray-700 duration-300 pr-3">Full</span>
            <br />
            <span className=" hover:text-gray-700 duration-300 pr-3 ">
              Stack
            </span>
            <span className=" hover:text-gray-700 duration-300 pr-6">
              Developer
            </span>
          </h2>

          <p className="text-gray-500 md:py-4 max-w-md">
            I have been 2 years of studying and building / desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind and NodeJs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md 
             bg-gradient-to-br from-black via-black to-gray-800 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                {/* <MdOutlineKeyboardArrowRight  /> */}
                <CgArrowRightO size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className=" w-3/4 ">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-60 md:w-auto hover:-rotate-6 duration-300 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

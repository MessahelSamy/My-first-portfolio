import React from "react";
import ContriesApp from "../assets/portfolio/ph-contrie-app.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ContriesApp,
      href: "https://contries-app.netlify.app/",
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div name="portfolio" className="flex justify-center">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-700 hover:border-transparent duration-300 mt-4 cursor-pointer ">
            Portfolio
          </p>
        </div>
        <p className="flex justify-center pb-6 pt-5">
          - Check out some of my work right here -
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-100 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="" target="_blank" rel="noreferrer">
                  <button className="text-gray-500 w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-white">
                    Demo
                  </button>
                </a>

                <button className="text-gray-500 w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-white">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

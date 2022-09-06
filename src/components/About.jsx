import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex justify-center sm:text-right  pb-8">
          <p
            className="text-4xl font-semibold w- border-b-4 border-gray-700 
           hover:border-transparent duration-300 mt-4 cursor-pointer"
          >
            About
          </p>
        </div>

        <p className="flex justify-center pb-6 pt-1">
          - Hi. I'm Samy, nice to meet you. Please take a look around -
        </p>

        <br />

        <p className="text-xl text-center">
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips ?
        </p>
      </div>
    </div>
  );
}

export default About;

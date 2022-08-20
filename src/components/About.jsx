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

        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          voluptatem quos ducimus minus, ipsum, culpa soluta veritatis cum,
          delectus enim temporibus beatae. Magni ut, suscipit architecto nobis
          laudantium perspiciatis error saepe, itaque inventore quis
          reprehenderit pariatur autem atque esse, neque ad optio ipsum
          repudiandae? Odio illum necessitatibus quas consequatur.
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          delectus sequi dolorum non, numquam hic illo vero quo a eos dolor
          quibusdam quos natus quidem quod adipisci. Dolores possimus ducimus
          illo deleniti. Soluta nemo qui, laboriosam, neque atque cumque est
          quae exercitationem culpa cupiditate fugiat officia dolore, ipsam quam
          natus?
        </p>
      </div>
    </div>
  );
}

export default About;

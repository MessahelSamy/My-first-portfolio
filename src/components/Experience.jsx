import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      href: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      href: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      href: "https://fr.wikipedia.org/wiki/JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      href: "https://fr.wikipedia.org/wiki/React",
      style: "shadow-sky-400",
    },
    // {
    //   id: 5,
    //   src: tailwind,
    //   title: "Tailwind",
    //   href:"",
    //   style: "shadow-sky-400",
    // },
    {
      id: 6,
      src: github,
      title: "GitHub",
      href: "https://fr.wikipedia.org/wiki/GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      href: "https://fr.wikipedia.org/wiki/Node.js",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="flex justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-700 hover:border-transparent duration-300 p-1 inline cursor-pointer ">
            Experience
          </p>
        </div>
        <p className="flex justify-center pb-6 pt-3">
          - These are the technologies I've worked with -
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, href, style }) => (
            <a href={href} className=" " target="_blank" rel="noreferrer">
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

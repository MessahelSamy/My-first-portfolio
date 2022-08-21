import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Sociallinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/messahel-samy-salaheddine/",
      style: "rounded-tr-md bg-gradient-to-r from-[#0096FF]  to-[#1363DF]",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MessahelSamy",
      style: " bg-gradient-to-r from-[#29435C]  to-[#152A38] ",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/samy_messahel/?hl=fr",
      style: " bg-gradient-to-r from-[#f6d327] via-[#e725a1] to-[#872bff] ",
    },
    {
      id: 4,
      child: (
        <>
          Gmail <SiGmail size={30} />
        </>
      ),
      href: "mailto:messahel8samy23@gmail.com",
      style:
        "rounded-br-md bg-gradient-to-r from-[#00701a] via-[#ffc400] to-[#d50000] ",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sociallinks;

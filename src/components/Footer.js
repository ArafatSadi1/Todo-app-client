import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-indigo-700 py-2 lg:py-6 px-3 lg:px-24 grid grid-cols-1 lg:grid-cols-2 absolute w-full bottom-0">
      <div className="text-white">
        <h2 className="text-2xl font-serif">Todoist</h2>
        <p className="text-lg text-gray-300 flex items-center">Create with <span className="px-2 text-red-400"><BsFillSuitHeartFill/></span> by Yasin Arafat</p>
      </div>
      <div className="mt-4 lg:mt-0">
        <h4 className="text-2xl lg:text-xl text-left lg:text-center text-gray-300 mb-2">Social</h4>
        <div className="flex lg:justify-evenly gap-3 text-3xl text-lime-100 hover:text-lime-200">
          <span className="cursor-pointer"><FaFacebookSquare/></span>
          <span className="cursor-pointer"><FaLinkedin/></span>
          <span className="cursor-pointer"><FaGithubSquare/></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

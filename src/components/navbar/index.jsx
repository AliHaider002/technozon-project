import React from "react";
import logo from "../navbar/";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src="/images/logo.jpg"
            alt="logo"
            className="w-[5rem] h-[5rem]"
          />
        </div>
        <div className="text-[1.2rem] font-[500]">TechnoZone</div>
      </div>
      <div className="flex justify-normal items-center lg:gap-[3rem] gap-[1rem] text-[1rem] font-[600]  ">
        <Link href={"/"}>
          <div className="hover:text-red-400 px-[0.2rem] transition-all duration-400 border-b-[2px] border-transparent hover:border-red-400 cursor-pointer">
            Home
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="hover:text-red-400 px-[0.2rem] transition-all duration-400 border-b-[2px] border-transparent hover:border-red-400 cursor-pointer">
            Blogs
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="hover:text-red-400 px-[0.2rem] transition-all duration-400 border-b-[2px] border-transparent hover:border-red-400 cursor-pointer">
            Contact Us
          </div>
        </Link>
        <Link href={"/upload"}>
          <div className="bg-[#2674CF] text-white rounded-full hover:bg-[#272660] py-[0.5rem] px-[0.7rem] transition-all duration-400 border-b-[2px] border-transparent cursor-pointer">
            Upload
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Menu from "@/assets/images/icon-menu.svg";

const navbar = () => {
  return (
    <nav className="flex items-center ">
      <div className="md:flex hidden">
        <Image src={Logo} width={70} alt="" />
      </div>
      <div className="flex md:hidden">
        <Image src={Logo} width={50} alt="" />
      </div>
      <div className="flex ml-auto mr-0 md:hidden">
        <Image src={Menu} width={50} alt="" />
      </div>
      <ul className="ml-auto mr-0 md:flex gap-11 hidden text-[#5b5b5b] text-lg [&>*]:cursor-pointer [&>*]:hover:text-[#EE604B] [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-150">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default navbar;

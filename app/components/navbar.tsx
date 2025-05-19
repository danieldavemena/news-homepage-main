import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const navbar = () => {
  return (
    <nav className="flex items-center">
      <Image src={Logo} width={70} alt="" />
      <ul className="ml-auto mr-0 flex gap-11 text-[#5b5b5b] text-lg">
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

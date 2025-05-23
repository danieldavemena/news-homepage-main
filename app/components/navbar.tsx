import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Menu from "@/assets/images/icon-menu.svg";
import MobileNav from "@/app/components/mobilenav";

const navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    const clicked = !click;

    setClick(clicked);
  }

  return (
    <div>
      <nav className="flex items-center md:w-[1200px] md:mt-[65px] w-[360px] mt-[40px]  absolute left-1/2 transform -translate-x-1/2">
        <div className="md:flex hidden">
          <Image src={Logo} width={70} alt="" />
        </div>
        <div className="flex md:hidden">
          <Image src={Logo} width={50} alt="" />
        </div>
        <div className="flex ml-auto mr-0 md:hidden" onClick={handleClick}>
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
      <MobileNav isClicked={handleClick} clicked={click} />
    </div>
  );
};

export default navbar;

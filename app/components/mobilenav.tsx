import React from "react";
import Image from "next/image";
import Close from "@/assets/images/icon-menu-close.svg";

const mobilenav = () => {
  return (
    <nav className="md:hidden h-screen w-[65%] p-7 bg-white z-10 flex flex-col  fixed right-0">
      <div className="mr-0 ml-auto">
        <Image src={Close} alt="" />
      </div>
      <ul className="flex flex-col mt-25 text-xl gap-5">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default mobilenav;

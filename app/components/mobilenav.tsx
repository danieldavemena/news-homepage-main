import React, { useEffect, useState } from "react";
import Image from "next/image";
import Close from "@/assets/images/icon-menu-close.svg";

const mobilenav = ({
  isClicked,
  clicked,
}: {
  isClicked: Function;
  clicked: boolean;
}) => {
  const [hide, setHide] = useState("-right-80");
  const [dim, setDim] = useState("hidden");

  useEffect(() => {
    if (clicked) {
      setHide("right-0");
      setDim("fixed");
    } else {
      setHide("-right-80");
      setDim("hidden");
    }
  });

  return (
    <div>
      <nav
        className={`md:hidden h-screen w-[65%] p-7 bg-white z-10 flex flex-col  fixed ${hide} transition-all ease-in-out duration-300`}
      >
        <div className="mr-0 ml-auto" onClick={() => isClicked()}>
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
      <div
        className={`md:hidden ${dim} h-screen w-screen z-5 bg-[#00000097]`}
      ></div>
    </div>
  );
};

export default mobilenav;

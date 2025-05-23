import React from "react";
import Image from "next/image";
import RetroPC from "@/assets/images/image-retro-pcs.jpg";
import TopLaptops from "@/assets/images/image-top-laptops.jpg";
import GamingGrowth from "@/assets/images/image-gaming-growth.jpg";

const topnews = () => {
  return (
    <section className="md:grid grid-cols-3 mb-[100px] md:-mt-8 mt-[70px] md:w-[104%] flex flex-col justify-center gap-6">
      <div className="col-span-1 flex ">
        <div className="w-[100px] mr-7">
          <Image src={RetroPC} alt="RetroPC" />
        </div>
        <div className="flex-1 ">
          <h1 className="  text-[#EE604B] text-3xl font-bold">01</h1>
          <h3 className="cursor-pointer hover:text-[#EE604B] transition-all ease-in-out duration-150 font-bold text-[1.2rem] mb-2 ">
            Reviving Retro PCs
          </h3>
          <p className="text-[1.05rem] w-[240px]  text-[#5b5b5b] ">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="col-span-1 flex ">
        <div className="w-[100px] mr-7">
          <Image src={TopLaptops} alt="TopLaptops" />
        </div>
        <div className="flex-1 ">
          <h1 className=" text-[#EE604B] text-3xl font-bold">02</h1>
          <h3 className="cursor-pointer hover:text-[#EE604B] transition-all ease-in-out duration-150 font-bold text-[1.2rem] mb-2 ">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-[1.05rem] w-[240px]  text-[#5b5b5b] ">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="col-span-1 flex">
        <div className="w-[100px] mr-7">
          <Image src={GamingGrowth} alt="GamingGrowth" />
        </div>
        <div className="flex-1 ">
          <h1 className=" text-[#EE604B] text-3xl font-bold">03</h1>
          <h3 className="cursor-pointer hover:text-[#EE604B] transition-all ease-in-out duration-150 font-bold text-xl mb-2 ">
            The Growth of Gaming
          </h3>
          <p className="text-[1.05rem] w-[240px]  text-[#5b5b5b] ">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default topnews;

import React from "react";
import Image from "next/image";
import RetroPC from "@/assets/images/image-retro-pcs.jpg";
import TopLaptops from "@/assets/images/image-top-laptops.jpg";
import GamingGrowth from "@/assets/images/image-gaming-growth.jpg";

const topnews = () => {
  return (
    <section className="grid grid-cols-3 mb-[50px] w-[103%] -mt-8">
      <div className="col-span-1 flex">
        <Image src={RetroPC} alt="RetroPC" width={120} />
        <div className="flex-1 mx-7">
          <h1 className=" mb-3 text-[#EE604B] text-4xl font-bold">01</h1>
          <h3 className="font-bold text-xl mb-3 ">Reviving Retro PCs</h3>
          <p className="text-lg text-[#5b5b5b] ">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="col-span-1 flex ">
        <Image src={TopLaptops} alt="TopLaptops" width={120} />
        <div className="flex-1 mx-7">
          <h1 className=" mb-3 text-[#EE604B] text-4xl font-bold">02</h1>
          <h3 className="font-bold text-xl mb-3 ">Top 10 Laptops of 2022</h3>
          <p className="text-lg text-[#5b5b5b] ">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="col-span-1 flex">
        <Image src={GamingGrowth} alt="GamingGrowth" width={120} />
        <div className="flex-1 mx-7">
          <h1 className=" mb-3 text-[#EE604B] text-4xl font-bold">03</h1>
          <h3 className="font-bold text-xl mb-3 ">The Growth of Gaming</h3>
          <p className="text-lg text-[#5b5b5b] ">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default topnews;

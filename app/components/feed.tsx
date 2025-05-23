import React from "react";
import Image from "next/image";
import WebImage from "@/assets/images/image-web-3-desktop.jpg";
import MobileImage from "@/assets/images/image-web-3-mobile.jpg";
import Line from "@/app/components/line";

const feed = () => {
  return (
    <main className="md:grid flex flex-col justify-center  md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-4 md:mt-[60px] mt-[30px] ">
      <div className="col-span-2 md:block hidden">
        <Image src={WebImage} alt="" />
      </div>
      <div className="col-span-1 block md:hidden">
        <Image src={MobileImage} alt="" />
      </div>
      <div className="row-start-2 md:mt-10 mt-7 row-span-1 col-span-1">
        <h1 className="font-bold md:text-6xl text-5xl mr-8">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="row-start-2 md:mt-10 mt-5 row-span-1 col-span-1 flex flex-col">
        <p className="md:text-[1.2rem] text-[1.1rem] text-[#5b5b5b]">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <div className="w-max text-md font-bold tracking-widest md:py-2 py-3.5 px-12 md:mt-11 mt-6 hover:bg-[#00011A] hover:text-white cursor-pointer transition-all duration-150 ease-in-out bg-[#EE604B]">
          READ MORE
        </div>
      </div>
      <div className="md:mt-0 mt-16 col-start-3 col-span-1 row-span-2 md:p-7 p-6 md:ml-10 md:h-[573px] bg-[#00011A]">
        <h1 className="text-[#E8A145] text-4xl font-bold md:mt-2">New</h1>
        <div className="mt-8 w-full [&>h2]:cursor-pointer [&>h2]:hover:text-[#E8A145] [&>h2]:transition-all [&>h2]:ease-in-out [&>h2]:duration-150 ">
          <h2 className="text-[#FEFDF9] font-bold text-[1.3rem]">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-zinc-400 text-md mt-2">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <Line />
          <h2 className="text-[#FEFDF9] font-bold text-[1.3rem]">
            The Downsides of AI Artistry
          </h2>
          <p className="text-zinc-400 text-md mt-2">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <Line />
          <h2 className="text-[#FEFDF9] font-bold text-[1.3rem]">
            Is VC Funding Drying Up?
          </h2>
          <p className="text-zinc-400 text-md mt-2">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </main>
  );
};

export default feed;

import React from "react";
import Image from "next/image";
import WebImage from "@/assets/images/image-web-3-desktop.jpg";
import Line from "@/app/components/line";

const feed = () => {
  return (
    <main className="grid grid-cols-3 grid-rows-2 mt-[50px] ">
      <div className="col-span-2 ">
        <Image src={WebImage} alt="" />
      </div>
      <div className="row-start-2 mt-10 row-span-1 col-span-1">
        <h1 className="font-bold text-6xl mr-8">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="row-start-2 mt-10 row-span-1 col-span-1 flex flex-col">
        <p className="text-xl text-[#5b5b5b]">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <div className="w-max text-lg font-bold tracking-widest py-2 px-12 mt-11 bg-[#EE604B]">
          READ MORE
        </div>
      </div>
      <div className="col-start-3 col-span-1 row-span-2 p-7 ml-10 h-[600px] bg-[#00011A]">
        <h1 className="text-[#E8A145] text-5xl font-bold mt-2">New</h1>
        <div className="mt-8 w-full">
          <h2 className="text-[#FEFDF9] font-bold text-[1.45rem]">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-zinc-400 text-lg mt-2">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <Line />
          <h2 className="text-[#FEFDF9] font-bold text-[1.45rem]">
            The Downsides of AI Artistry
          </h2>
          <p className="text-zinc-400 text-lg mt-2">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <Line />
          <h2 className="text-[#FEFDF9] font-bold text-[1.45rem]">
            Is VC Funding Drying Up?
          </h2>
          <p className="text-zinc-400 text-lg mt-2">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </main>
  );
};

export default feed;

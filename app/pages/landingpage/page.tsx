import React from "react";
import Feed from "@/app/components/feed";
import TopNews from "@/app/components/topnews";

const page = () => {
  return (
    <div className="md:w-[1200px] md:mt-[95px] w-[360px] mt-[75px] absolute left-1/2 transform -translate-x-1/2">
      <Feed />
      <TopNews />
    </div>
  );
};

export default page;

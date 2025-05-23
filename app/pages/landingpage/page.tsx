import React from "react";
import NavBar from "@/app/components/navbar";
import Feed from "@/app/components/feed";
import TopNews from "@/app/components/topnews";

const page = () => {
  return (
    <div className="md:w-[1200px] md:mt-[70px] w-[360px] mt-[40px] absolute left-1/2 transform -translate-x-1/2">
      <NavBar />
      <Feed />
      <TopNews />
    </div>
  );
};

export default page;

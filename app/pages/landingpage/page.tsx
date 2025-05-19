import React from "react";
import NavBar from "@/app/components/navbar";
import Feed from "@/app/components/feed";
import TopNews from "@/app/components/topnews";

const page = () => {
  return (
    <div className="w-[1300px] my-[50px] absolute left-1/2 transform -translate-x-1/2">
      <NavBar />
      <Feed />
      <TopNews />
    </div>
  );
};

export default page;

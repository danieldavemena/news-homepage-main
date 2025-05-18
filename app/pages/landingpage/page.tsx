import React from "react";
import NavBar from "@/app/components/navbar";
import Feed from "@/app/components/feed";

const page = () => {
  return (
    <div className="w-[1300px] mt-[50px] absolute left-1/2 transform -translate-x-1/2">
      <NavBar />
      <Feed />
    </div>
  );
};

export default page;

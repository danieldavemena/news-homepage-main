import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const navbar = () => {
  return (
    <nav>
      <Image src={Logo} width={55} alt="" />
    </nav>
  );
};

export default navbar;

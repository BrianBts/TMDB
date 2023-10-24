import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import CommonCarrusel from "@/common/CommonCarrusel";
import Navbars from "./Navbar2";

function CarruselHome({ films }) {
  return (
    <>
      <Navbars films={films} />
      <div>
        <CommonCarrusel films={films} />
        <div className="z-10 absolute w-[1100px] h-[350px] flex flex-col items-center justify-center  top-[200px] left-[750px] ">
          <p className="text-white text-[100px] font-bebasNeue leading-[90px] mb-28 ">
            Las mejores <span className="text-redNetf">películas</span> y{" "}
            <span className="text-redNetf">series</span> en un mismo lugar.
          </p>
          <Image
            src={logo}
            alt="tmdb"
            height={85}
            className="transform scale-100 hover:scale-110 transition-transform"
          />
        </div>
        <div className="absolute h-[100vh] w-[55%] inset-0 bg-ultrablack opacity-60 "></div>
      </div>
    </>
  );
}

export default CarruselHome;

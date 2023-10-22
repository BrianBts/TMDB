import React, { useState } from "react";
import Image from "next/image";

const CardCategory = ({ title, image, className, onClick }) => {
  return (
    <div
      className={`bg-black h-[180px] w-[300px] rounded-xl relative overflow-hidden || ${className}`}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        onClick={onClick}
      />
      <div className="absolute inset-0 bg-ultrablack opacity-60"></div>
      <p className="absolute inset-0 flex items-center justify-center text-white text-[40px] font-bebasNeue">
        {title}
      </p>
    </div>
  );
};

export default CardCategory;

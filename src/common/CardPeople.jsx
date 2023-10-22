import React from "react";

import Image from "next/image";

const CardPeople = ({ key, title, src }) => {
  return (
    <div
      className={`bg-black h-[500px] w-[320px]  relative overflow-hidden rounded-lg`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${src}`}
        alt={title}
        layout="fill"
        className="object cover w-full h-full "
      />

      {/* <p className="absolute inset-0 flex items-center justify-center text-white text-[40px] font-bebasNeue">
        {title}
      </p> */}
    </div>
  );
};

export default CardPeople;

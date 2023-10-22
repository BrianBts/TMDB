import React, { useState } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer transform transition-transform duration-200 mt-10 pl-3  ${
        isHovered ? "scale-120" : "scale-110"
      } m-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        className="rounded-lg"
        alt={data.original_title}
      />
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";

const CommonCarrusel = ({ films }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === films.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [films]);
  return (
    <div className="relative">
      {films.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute top-0 left-0 w-full h-[100vh] opacity-0 transition-opacity ease-in-out duration-500 ${
            currentImageIndex === index ? "opacity-100" : ""
          }`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-[55%] h-[100vh] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default CommonCarrusel;

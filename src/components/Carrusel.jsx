import React from "react";
import CardMovies from "../common/CardMovies";

export default function Carrusel({ title, movies }) {
  return (
    <>
      <p>{title}</p>
      <div className="flex justify-center gap-10 ">
        {movies.map((movie, index) => (
          <CardMovies
            key={index}
            title={movie.title}
            description={movie.description}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

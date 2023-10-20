import React from "react";

export default function CardMovies({ title, imageUrl }) {
  return (
    <>
      <div className="bg-white h-40 w-72 rounded-lg overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="p-4 flex flex-col justify-end h-full bg-gradient-to-t from-transparent to-black">
            <p className="text-white text-xl font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

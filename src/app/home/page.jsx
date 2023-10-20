import Navbar from "@/components/Navbar";
import React from "react";
import Carrusel from "../../components/Carrusel";

const Home = () => {
  const movies = [
    {
      title: "Pelicula 1",
      description: "Descripción de la película 1",
      imageUrl: "URL_IMAGEN_1",
    },
    {
      title: "Pelicula 2",
      description: "Descripción de la película 2",
      imageUrl: "URL_IMAGEN_2",
    },
    {
      title: "Pelicula 3",
      description: "Descripción de la película 3",
      imageUrl: "URL_IMAGEN_3",
    },
    {
      title: "Pelicula 3",
      description: "Descripción de la película 3",
      imageUrl: "URL_IMAGEN_3",
    },
    {
      title: "Pelicula 3",
      description: "Descripción de la película 3",
      imageUrl: "URL_IMAGEN_3",
    },
  ];

  return (
    <div className="bg-ultrablack h-screen bg-cover bg-center w-screen">
      <Navbar />
      <section className="bg-white w-full h-4/6 mb-24"></section>
      <div>
        <Carrusel title={"hello"} movies={movies} />
        <Carrusel title={"hello"} movies={movies} />
      </div>
    </div>
  );
};

export default Home;

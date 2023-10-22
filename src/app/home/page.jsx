"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Listado from "@/components/Listado";
import CarruselHome from "@/components/CarruselHome";
import Category from "@/components/Category";
import People from "@/components/People";
import { Waves } from "../../common/Icons";
import john from "../../../public/dcvfxob-c1c633e3-fad6-4c06-b60f-d6a92ec1a432.png";
import Image from "next/image";

const Home = () => {
  const [populars, setPopulars] = useState([]);
  const [seriesPopulars, setSeriesPopulars] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=17aefe15c140fc2eaa732df3a2b9e49f&language=es&page=1`
      )
      .then((res) => setPopulars(res.data.results));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=17aefe15c140fc2eaa732df3a2b9e49f`
      )
      .then((res) => setSeriesPopulars(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=17aefe15c140fc2eaa732df3a2b9e49f&language=es`
      )
      .then((res) => {
        setMovieGenres(res.data.genres);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=17aefe15c140fc2eaa732df3a2b9e49f&language=es`
      )
      .then((res) => setPeople(res.data.results));
  }, []);

  return (
    <>
      <div className="bg-ultrablack w-full h-full">
        <div>
          <CarruselHome films={populars} />
        </div>

        <div className="pt-[850px]">
          <Category categories={movieGenres} populars={populars} />
          <Listado
            populars={populars}
            title={"Películas Populares"}
            slidesToSchow={7}
          />

          <People people={people} />

          <Listado
            populars={seriesPopulars}
            title={"Series Populares"}
            slidesToSchow={7}
          />
        </div>
        <div className="w-[full] bottom-[230px] relative  ">
          <section className="absolute z-50    ml-11 mt-[-79px]">
            <Image src={john} alt="will" className="w-[230px] " />
          </section>
          <Waves />
        </div>
        <div className="bg-redNetf h-[50px] w-full -mt-64 flex flex-col justify-end items-center relative">
          <p className="text-white font-montserrat">
            Desarrollado por{" "}
            <span className="font-bold">Braian Barrientos.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

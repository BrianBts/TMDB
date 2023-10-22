import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../common/CardMovies";

const Listado = ({ populars, title, slidesToSchow, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToSchow,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className={`container mx-auto text-center pb-[100px] ${className}`}>
      <p className="text-2xl font-bold mt-4 text-white font-montserrat ">
        {title}
      </p>
      <Slider {...settings} className="mt-4 gap-7">
        {populars.map((data, index) => (
          <div key={data.id}>
            <Card data={data} isLast={index === populars.length - 1} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Listado;

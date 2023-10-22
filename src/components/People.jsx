import React from "react";
import CardPeople from "@/common/CardPeople";
import will from "../../public/Daco_4246343.png";
import Image from "next/image";
import ninja from "../../public/pngwing.com.png";

const People = ({ people }) => {
  const onlyFour = people.slice(0, 4);

  return (
    <>
      <div>
        <section className="absolute text-white font-bebasNeue text-7xl z-50 text-center ml-32 leading-[57px]">
          <p>ACTORES</p>
          <p className="text-redNetf">POPULARES</p>
        </section>
        <section className="absolute z-50 ml-[1550px] mt-16">
          <Image src={will} alt="will" className="w-[230px] " />
        </section>
        <section className="absolute z-50 ml-[470px] mt-60">
          <Image src={ninja} alt="will" className="w-[280px] " />
        </section>
        <div className="container mx-auto text-center pb-[80px] relative  h-[550px] pt-6">
          <div className="flex gap-10 justify-center pb-10">
            {onlyFour.map((person) => (
              <CardPeople
                key={person.id}
                title={person.name}
                src={person.profile_path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;

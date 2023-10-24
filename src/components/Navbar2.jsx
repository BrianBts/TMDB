"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/TMDB.png";

import { Input } from "@chakra-ui/react";
import ModalSearch from "@/hooks/ModalSearch";
import ModalRight from "@/hooks/ModalRight";

export default function Navbar({ films }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMovieModal = (movie) => {
    setIsModalOpen(true);
  };

  const closeMovieModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className="w-full h-14  bg-transparent absolute top-0 z-50  text-white">
      <div className="mx-auto flex items-center justify-between pb-3">
        <Image src={logo} alt="LogoTMDB" className="w-32 pl-5 pt-5" />

        <div className="flex items-center justify-center mr-5 mt-2 gap-6">
          <Input
            placeholder="Buscar Película"
            size="md"
            onClick={() => openMovieModal()}
          />
          {isModalOpen && (
            <ModalSearch isOpen={isModalOpen} onClose={closeMovieModal} />
          )}

          <ModalRight
            name={"Mi cuenta"}
            title={"¡Hola Braian!"}
            content={"lorem lorem lorem"}
            films={films}
          />
        </div>
      </div>
    </nav>
  );
}

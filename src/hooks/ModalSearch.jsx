import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Input from "@/common/Input";
import Listado from "@/components/Listado";

const ModalSearch = ({ isOpen, onClose }) => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=17aefe15c140fc2eaa732df3a2b9e49f&language=en-US&query=${value}&page=1&include_adult=false;`
      )
      .then((res) => setMovies(res.data.results));

    setValue("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Input
                placeholder="Buscar Película"
                size="md"
                onChange={handleValue}
                value={value}
              />
            </div>
          </form>
          <p className="font-bebasNeue text-6xl text-redNetf flex justify-center ">
            {value}
          </p>
          <Listado
            populars={movies}
            slidesToSchow={6}
            className={"mt-[-40px]"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSearch;

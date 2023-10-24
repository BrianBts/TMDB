"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const ModalUse = ({ isOpen, onClose, movie }) => {
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (movie.id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=17aefe15c140fc2eaa732df3a2b9e49f`
        )
        .then((response) => {
          const videos = response.data.results;

          if (videos.length > 0) {
            setVideoKey(videos[0].key);
          }
        })
        .catch((error) => {
          console.error("Error al obtener los videos de la película", error);
        });
    }
  }, [movie.id]);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddToFavorites = () => {
    // Realiza aquí las acciones para agregar a favoritos
    // Puedes agregar un código para simular una operación que toma un tiempo
    setIsLoading(true);

    // Simulación de operación que toma 2 segundos
    setTimeout(() => {
      // Después de 2 segundos, puedes realizar acciones adicionales o simplemente cambiar el estado
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <div className="w-[500px] font-bebasNeue text-3xl text-redNetf">
            {movie.title}
          </div>{" "}
          {videoKey && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              playing={true}
              muted={true}
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 1,
                  },
                },
              }}
              width={"100%"}
              height={"50vh"}
            />
          )}
          <p className="font-inter text-lg mt-10 mb-10">{movie.overview}</p>
          <StatGroup>
            <Stat>
              <StatLabel className="font-inter font-bold">
                Popularidad
              </StatLabel>
              <StatNumber>{movie.popularity}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                {movie.vote_average}
              </StatHelpText>
            </Stat>
            {isLoading ? (
              <Button
                isLoading
                colorScheme="teal"
                loadingText="Agregando a favoritos"
                variant="outline"
              ></Button>
            ) : (
              <Button colorScheme="whatsapp" onClick={handleAddToFavorites}>
                Agregar a favoritos
              </Button>
            )}
          </StatGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalUse;

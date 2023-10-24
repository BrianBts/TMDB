import React from "react";
import {
  Input,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Listado from "@/components/Listado";
import cardFavorites from "@/common/cardFavorites";

const ModalRight = ({ name, title, content, films }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const router = useRouter();

  const exit = () => {
    router.push("/login");
  };

  return (
    <>
      <Button onClick={() => handleClick()} key={"lg"} m={4}>
        {name}
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="font-bebasNeue  ">{title}</DrawerHeader>
          <DrawerBody>
            {" "}
            <cardFavorites films={films} />
          </DrawerBody>
          <div className=" flex justify-center items-center mb-11">
            <Button colorScheme="red" size="md" onClick={exit}>
              Cerrar Sesión
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModalRight;

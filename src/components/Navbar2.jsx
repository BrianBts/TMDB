"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/TMDB.png";

import {
  Input,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <nav className="w-full h-14  bg-transparent absolute top-0 z-50  text-white">
      <div className="mx-auto flex items-center justify-between pb-3">
        <Image src={logo} alt="LogoTMDB" className="w-32 pl-5 pt-5" />

        <div className="flex items-center justify-center mr-5 mt-2 gap-6">
          <Input placeholder="Buscar Película" size="md" />

          <Menu>
            <MenuButton as={Button} colorScheme="red" width={"28"}>
              Perfil
            </MenuButton>
            <MenuList>
              <MenuGroup title="Usuario">
                <MenuItem>Mis favoritos</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="¿Ya te vas?">
                <MenuItem>Cerrar sesión</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";

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
    <nav className="bg-transparent">
      <div className="mx-auto flex items-center justify-between pb-3">
        <Image src={logo} alt="LogoTMDB" className="w-56 pl-5 pt-5" />

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

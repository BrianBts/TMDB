import Button from "@/common/Button";
import Input from "@/common/Input";
import React from "react";

export default function Register({ onClick }) {
  return (
    <div className="bg-blackblack h-auto bg-opacity-95 pl-14 pr-14 rounded-md pb-10">
      <p className="text-[35px] text-white font-medium pt-11 pb-7">
        Registrate
      </p>
      <Input placeholder={"Nombre"} />
      <Input placeholder={"Apellido"} />
      <Input placeholder={"Usuario"} />
      <Input placeholder={"Email"} />
      <Input placeholder={"Contraseña"} />
      <Button
        body={"Registrarse"}
        size={"big"}
        variant={"netflix"}
        className={"w-full mt-4 rounded-md h-14 "}
        onClick={onClick}
      />
    </div>
  );
}

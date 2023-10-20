import Button from "@/common/Button";
import Input from "@/common/Input";
import React from "react";

export default function Login({ onClick }) {
  return (
    <div className="bg-blackblack h-auto bg-opacity-95 pl-14 pr-14 rounded-md pb-16">
      <p className="text-[35px] text-white font-bold pt-11 pb-7">
        Inicia sesión
      </p>
      <Input placeholder={"Email o número de telefono"} />
      <Input placeholder={"Contraseña"} />
      <Button
        body={"Iniciar Sesión"}
        size={"big"}
        variant={"netflix"}
        className={"w-full mt-2 rounded-md h-14"}
      />
      <div className="flex flex-wrap items-center  mt-3">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-white">Recuérdame</p>
        </div>
        <div className="ml-auto">
          <p className="text-white">¿Necesitas ayuda?</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col text-center mt-11">
        <p className="text-white text-[18px] mb-4">
          ¿Primera vez en TMDB?{" "}
          <span className="font-bold underline" onClick={onClick}>
            Suscríbete ahora.
          </span>
        </p>
        <p className="text-white">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.
        </p>
      </div>
    </div>
  );
}

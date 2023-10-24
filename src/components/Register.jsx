import Button from "@/common/Button";
import Input from "@/common/Input";
import React from "react";
import { AuthServices } from "@/services/auth.services";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

export default function Register({ onClick }) {
  const nameInput = useInput("", "required");
  const lastNameInput = useInput("", "required");
  const userInput = useInput("", "required");
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthServices.register({
        name: nameInput.value,
        last_name: lastNameInput.value,
        username: userInput.value,
        email: emailInput.value,
        password: passWordInput.value,
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blackblack h-auto bg-opacity-95 pl-14 pr-14 rounded-md pb-10">
      <p className="text-[35px] text-white font-medium pt-11 pb-7">
        Registrate
      </p>
      <form className="" register onSubmit={handleSubmit}>
        <Input placeholder={"Nombre"} {...nameInput} />
        <Input placeholder={"Apellido"} {...lastNameInput} />
        <Input placeholder={"Usuario"} {...userInput} />
        <Input placeholder={"Email"} {...emailInput} />
        <Input placeholder={"Contraseña"} type="password" {...passWordInput} />
        <Button
          body={"Registrarse"}
          size={"big"}
          variant={"netflix"}
          className={"w-full mt-4 rounded-md h-14 "}
          type="submit"
        />
      </form>
    </div>
  );
}

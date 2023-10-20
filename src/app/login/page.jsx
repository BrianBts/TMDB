"use client";
import React, { useState, useEffect } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Image from "next/image";
import background from "../../../public/film-wallpaper-square-close-1024x1024.jpg";
import logo from "../../../public/logo.png";
import AnimationLogo from "@/components/AnimationLogo";

export default function Page() {
  const [showRegister, setShowRegister] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  }, []);

  const toggleView = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <Image
        src={background}
        className="absolute h-screen bg-cover bg-center w-screen -z-50"
      />
      <div className="bg-blackblack h-screen bg-cover bg-center">
        <section className="h-16">
          {showAnimation ? (
            <AnimationLogo />
          ) : (
            <Image src={logo} alt="LogoTMDB" className="w-72 pl-5 pt-5" />
          )}
        </section>
        <section className="pt-16 pr-[720px] pl-[720px]">
          {showAnimation ? null : showRegister ? (
            <Login onClick={toggleView} />
          ) : (
            <div className="mt-[-45px]">
              <Register onClick={toggleView} />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

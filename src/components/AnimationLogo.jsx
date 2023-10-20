import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import logo from "../../public/TMDB.png";

const AnimationLogo = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateLogo = async () => {
      await controls.start({
        opacity: 1,
        scale: 1.3,
        transition: { duration: 1.5 },
      });

      await controls.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5 },
      });
    };

    animateLogo();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      className="logo-container absolute mt-[18%] ml-[40%] z-[999] translate-x-[-50%] translate-y-[-50%]"
    >
      <Image src={logo} alt="Tu Logo" width={400} height={400} />
    </motion.div>
  );
};

export default AnimationLogo;

"use client";

import { motion } from "motion/react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Container } from "./Container";

export const Hero = () => {
  return (
    <div className="h-screen w-full">
      <Container>
        {/* Video de fondo */}
        <video
          className="fixed top-0 left-0 -z-10 h-full w-full object-cover"
          src="bg2.webm"
          autoPlay
          loop
          muted
          playsInline
          poster="/preview.webp"
        />

        {/* Capa oscura */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full bg-black/50" />

        {/* Contenido */}
        <div className="flex w-full h-screen flex-col items-start justify-center">
          <div className="w-full py-10 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-wrap text-5xl font-bold tracking-tight text-white sm:text-7xl"
            >
              Soluciones eficientes para tus proyectos de ingeniería
            </motion.h1>
          </div>
        </div>

        {/* Flecha */}
        <div className="flex h-screen flex-col items-center justify-center">
          <Link
            className="absolute bottom-10 animate-bounce cursor-pointer"
            to="aboutus"
          >
            <FaAngleDown className="h-8 w-8 text-white/70 hover:text-white" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

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
          src="bgvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Capa oscura */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full bg-black/50" />

        {/* Contenido */}
        <div className="flex w-full h-screen flex-col items-start justify-center">
          <div className="w-full py-10">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-8xl">
              Siempre seguros
            </h1>
          </div>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <Link
            className="absolute bottom-10 animate-bounce cursor-pointer"
            style={{ animation: "fadeIn 0.3s" }}
            to="aboutus"
          >
            <FaAngleDown className="h-8 w-8 text-white/70 hover:text-white" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

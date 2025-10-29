"use client";

import Mapa from "@/assets/images/mapa.png";
import { Container } from "./Container";

const states = [
  {
    name: "Baja California",
  },
  {
    name: "Sonora",
  },
  {
    name: "Chihuahua",
  },
  {
    name: "Nuevo León",
  },
  {
    name: "Jalisco",
  },
];

function Map() {
  return (
    <div className="col-span-4 h-fit w-full">
      <img src={Mapa} alt="" />
    </div>
  );
}

function StateList() {
  return (
    <div className="col-span-2 h-80 w-full place-self-center rounded-2xl bg-primary">
      <ul className="flex h-full flex-col justify-center gap-4 px-8 text-lg font-semibold text-white">
        {states.map((state) => (
          <li key={state.name} className="list-disc pb-2">
            {state.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Presence() {
  return (
    <section
      id="presence"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white py-10"
    >
      {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Presencia
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Actualmente contamos con presencia en 5 estados de la republica.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <Map />
          <StateList />
        </div>
      </Container>
    </section>
  );
}

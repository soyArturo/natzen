"use client";

import clsx from "clsx";
import { useId } from "react";

import backgroundImage from "@/assets/images/background-aboutus2.jpeg";
import { Container } from "@/components/Container";
import { FaAtom, FaRegLightbulb } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";

const features = [
  {
    name: "Misión",
    values: [
      {
        id: 1,
        title:
          "Aplicar los mejores procesos durante todo el proyecto con altos estándares de calidad, seguridad y eficiciencia.",
      },
    ],
    icon: function ReportingIcon() {
      let id = useId();
      return (
        <TbTargetArrow id={id} className="text size-28 text-primary-darker" />
      );
    },
  },
  {
    name: "Visión",
    values: [
      {
        id: 1,
        title:
          "Posicionarnos como la mejor opción para nuestros clientes y ser un estándar a nivel nacional.",
      },
    ],
    icon: function InventoryIcon() {
      return <FaRegLightbulb className="size-24 text-primary-darker" />;
    },
  },
  {
    name: "Valores",
    values: [
      {
        id: 1,
        title: "Pasion",
      },
      {
        id: 2,
        title: "Altruismo",
      },
      {
        id: 3,
        title: "Honestidad",
      },
    ],
    icon: function ContactsIcon() {
      return <FaAtom className="size-28 text-primary-darker" />;
    },
  },
];

function Feature({
  feature,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  feature: any;
}) {
  return (
    <div className={clsx(className)} {...props}>
      <div
        className={clsx(
          "flex size-28 items-center justify-center rounded-lg bg-white p-2"
        )}
      >
        <feature.icon />
      </div>
      <h3 className={clsx("mt-6 text-[20px] font-medium text-white")}>
        {feature.name}
      </h3>

      <div key={feature.name} className="mt-3 rounded-xl bg-white/5 p-3">
        <ol>
          {feature.values.map((value: any) => (
            <li
              key={value.id}
              className={clsx(
                "rounded-md p-3 text-base text-white transition",
                feature.values.length > 1 ? "ml-6 list-disc" : ""
              )}
            >
              {value.title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <>
        <div className="grid grid-cols-3 gap-x-8">
          {features.map((feature) => (
            <Feature
              key={feature.name}
              feature={{
                ...feature,
                name: (
                  <div className="">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              className="relative"
            />
          ))}
        </div>
      </>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  );
}

export function AboutUs() {
  return (
    <section
      id="aboutus"
      aria-label="Features for running your books"
      className="relative overflow-hidden pt-20 pb-28 sm:py-32"
    >
      <img
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            ¿Quienes somos?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Grupo Natzen es fundada en el año 2019, con la propuesta fundamental
            de generar soluciones integrales para las cuestiones energéticas de
            todos los usuarios que requieren del suministro eléctrico. Nuestro
            equipo cuenta con más de 15 años de experiencia, teniendo personal
            capacitado en varias áreas de ingeniería. Buscamos siempre la mejora
            continua en todos nuestros procesos, con innovación y
            sustentabilidad, para dar los mejores resultados a nuestros
            clientes. Con estas bases y metodología de trabajo que tenemos,
            obtenemos altos estándares de calidad, seguros y eficientes que nos
            permitirán posicionarnos como la mejor opción para los usuarios y
            ser un estándar a nivel nacional.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}

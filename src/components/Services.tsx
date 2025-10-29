"use client";

import clsx from "clsx";

import { Container } from "@/components/Container";
import { FaFileContract, FaSolarPanel } from "react-icons/fa6";

const features = [
  {
    name: "Obra Eléctrica",
    values: [
      {
        id: 1,
        title:
          "Encargados del diseño y puesta en marcha. Aseguramos una correcta operación, ofreciendo los mejores parámetros de eficiencia, estética y limpieza. Nuestras obras te permitirán cubrir tus necesidades actuales y tener un crecimiento planificado cuando así se requiera. Todas nuestras obras dan cumplimiento a los requerimientos demandados por la NOM-001-SEDE-2012.",
      },
    ],
    icon: function ReportingIcon() {
      return (
        <img
          width="128"
          height="128"
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/128/external-electric-tower-energy-dreamstale-lineal-dreamstale.png"
          alt="external-electric-tower-energy-dreamstale-lineal-dreamstale"
        />
      );
    },
  },
  {
    name: "Simulación en Software",
    values: [
      {
        id: 1,
        title:
          "Cubriendo diversas áreas de ingeniería nos apoyamos de diversas herramientas informáticas para realizar modelados BIM. De esta manera realizamos y analizamos pruebas de funcionamiento, pronósticos, promedios, alcances, entre otros. Adicionalmente otorga la facilidad de poder observarlo y desplegar alcances propiciando una mejor planificación.",
      },
    ],
    icon: function InventoryIcon() {
      return (
        <img
          width="128"
          height="128"
          src="https://img.icons8.com/ios-filled/128/simulation.png"
          alt="simulation"
        />
      );
    },
  },
  {
    name: "Energía Solar",
    values: [
      {
        id: 1,
        title:
          "Con amplia experiencia que nos respalda. Más 12.8 MW instalados y mantenimientos a plantas mayores a 1 MW. Te apoyamos en el diseño, instalación, suministro, mantenimiento, análisis de estado de planta con viabilidad económica, técnica y legislativa.",
      },
    ],
    icon: function ContactsIcon() {
      return <FaSolarPanel className="size-28 " />;
    },
  },
  {
    name: "Código de Red",
    values: [
      {
        id: 1,
        title:
          "Es el documento técnico emitido el 8 de abril de 2016 por la comisión Reguladora de Energía (CRE) donde detalla los parámetros técnicos mínimos para que un centro de carga pueda operar en el sistema eléctrico nacional (SEN).",
      },
    ],
    icon: function ContactsIcon() {
      return <FaFileContract className="size-24 " />;
    },
  },
  {
    name: "Mantenimientos",
    values: [
      {
        id: 1,
        title:
          "Se recomienda realizar un mantenimiento anual para asegurar el correcto funcionamiento de los equipos fuente en tus instalaciones eléctricas.",
      },
    ],
    icon: function ContactsIcon() {
      return (
        <img
          width="128"
          height="128"
          src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/128/external-machine-printing-tulpahn-detailed-outline-tulpahn.png"
          alt="external-machine-printing-tulpahn-detailed-outline-tulpahn"
        />
      );
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
          "flex size-32 w-full items-center justify-center rounded-lg"
        )}
      >
        <feature.icon />
      </div>
      <h3 className={clsx("mt-6 text-[20px] font-medium text-primary")}>
        {feature.name}
      </h3>

      <div key={feature.name} className="mt-3 rounded-xl bg-white/5">
        <ol>
          {feature.values.map((value: any) => (
            <li
              key={value.id}
              className={clsx(
                "rounded-md text-center text-base text-black transition"
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

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <>
        <div className="grid grid-cols-6 grid-rows-2 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={feature.name}
              feature={{
                ...feature,
                name: (
                  <div className="flex justify-center">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              className={`relative ${
                index === 0 ? "col-start-1 col-end-3 row-start-1 row-end-2" : ""
              } ${
                index === 1 ? "col-start-3 col-end-5 row-start-1 row-end-2" : ""
              } ${
                index === 2 ? "col-start-5 col-end-7 row-start-1 row-end-2" : ""
              } ${
                index === 3 ? "col-start-2 col-end-4 row-start-2 row-end-3" : ""
              } ${
                index === 4 ? "col-start-4 col-end-6 row-start-2 row-end-3" : ""
              } `}
            />
          ))}
        </div>
      </>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-label="Features for simplifying everyday business tasks"
      className="bg-background pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Servicios
          </h2>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}

import atisa from "@/assets/images/logos/atisa.svg";
import beetmann from "@/assets/images/logos/beetmann.png";
import cfe from "@/assets/images/logos/cfe.svg";
import dynamic from "@/assets/images/logos/dynamic.jpeg";
import elektra from "@/assets/images/logos/elektra.png";
import flex from "@/assets/images/logos/flex.png";
import homedepot from "@/assets/images/logos/homedepot.png";
import hutchinson from "@/assets/images/logos/hutchinson.svg";
import lala from "@/assets/images/logos/lala.svg";
import oxxo from "@/assets/images/logos/oxxo.png";
import prologis from "@/assets/images/logos/prologis.svg";
import sedena from "@/assets/images/logos/sedena.png";
import sempra from "@/assets/images/logos/sempra.svg";
import teleflex from "@/assets/images/logos/teleflex.svg";
import vesta from "@/assets/images/logos/vesta.png";
import waldos from "@/assets/images/logos/waldos.png";
import { Container } from "@/components/Container";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const clients = [
  { name: "Vesta", logo: vesta, type: "image" },
  { name: "Prologis", logo: prologis, type: "svg" },
  { name: "Atisa", logo: atisa, type: "svg" },
  { name: "Elektra", logo: elektra, type: "image" },
  { name: "Flex", logo: flex, type: "image" },
  { name: "Teleflex", logo: teleflex, type: "svg" },
  { name: "OXXO", logo: oxxo, type: "image" },
  { name: "Sempra", logo: sempra, type: "svg" },
  { name: "Hutchinson", logo: hutchinson, type: "svg" },
  { name: "Waldos", logo: waldos, type: "image" },
  { name: "Lala", logo: lala, type: "svg" },
  { name: "CFE", logo: cfe, type: "svg" },
  { name: "Home Depot", logo: homedepot, type: "image" },
  { name: "SEDENA", logo: sedena, type: "image" },
  { name: "Dynamic", logo: dynamic, type: "image" },
  { name: "Beetmann", logo: beetmann, type: "image" },
];

export function CallToAction() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <section id="clients" className="relative overflow-hidden bg-white py-32">
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Clientes
          </h2>
        </div>
        {/* <div ref={emblaRef} className="overflow-hidden  transform w-full ">
          <div className="flex">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center"
              >
                {client.type === "svg" ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto"
                  />
                ) : (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
        <div
          ref={emblaRef}
          className="mt-10 overflow-hidden left-1/2 transform "
        >
          <div className="flex">
            {clients.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center mx-4 w-[250px] `}
              >
                <div className="relative max-w-sm">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-cdf-500 rounded-md"></span>
                  <div className="relative flex items-center justify-center bg-white p-2 border-2 border-cdf-500 rounded-md dark:bg-dark w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="object-contain w-40 lg:w-56"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

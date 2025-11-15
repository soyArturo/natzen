"use client";
import type { EmblaOptionsType } from "embla-carousel";

import { Container } from "@/components/Container";
import EmblaCarousel from "./EmblaCarousel";

export function PrimaryFeatures() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section
      id="proyects"
      aria-label="Features for running your books"
      className="relative overflow-hidden pt-20 pb-28 sm:py-32 gradient-background"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proyectos
          </h2>
        </div>
        <EmblaCarousel {...({ slides: SLIDES, options: OPTIONS } as any)} />
      </Container>
    </section>
  );
}

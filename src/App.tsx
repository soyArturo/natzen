import { lazy, Suspense, type JSX } from "react";
import { AboutUs } from "./components/AboutUs";
import BttButton from "./components/bttButton";
import { CallToAction } from "./components/CallToAction";
import { ContactUs } from "./components/Contact";
import { FadeInOnScroll } from "./components/FadeInOnScroll";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { Services } from "./components/Services";

const Hero = lazy(() =>
  import("./components/Hero").then((module) => ({ default: module.Hero }))
);
const Presence = lazy(() =>
  import("./components/Presence").then((module) => ({
    default: module.Presence,
  }))
);

function App(): JSX.Element {
  const DELAY_INCREMENT = 0.15;
  let currentDelay = 0;

  const getNextDelay = () => {
    // Incrementamos y luego retornamos el valor antes del incremento para evitar delay en el primer componente
    const delay = currentDelay;
    currentDelay += DELAY_INCREMENT;
    return delay;
  };
  return (
    <>
      <main>
        <section className="h-screen w-full">
          <Header />
          <Hero />
        </section>
        <BttButton />
        <FadeInOnScroll delay={getNextDelay()}>
          <AboutUs />
        </FadeInOnScroll>
        <FadeInOnScroll delay={getNextDelay()}>
          <Services />
        </FadeInOnScroll>
        <FadeInOnScroll delay={getNextDelay()}>
          <PrimaryFeatures />
        </FadeInOnScroll>
        <FadeInOnScroll delay={getNextDelay()}>
          <CallToAction />
        </FadeInOnScroll>
        <Suspense fallback={<div>Cargando mapa...</div>}>
          <FadeInOnScroll delay={getNextDelay()}>
            <Presence />
          </FadeInOnScroll>
        </Suspense>
        <FadeInOnScroll delay={getNextDelay()}>
          <ContactUs />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}

export default App;

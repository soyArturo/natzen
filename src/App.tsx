import { lazy, Suspense } from "react";
import { AboutUs } from "./components/AboutUs";
import BttButton from "./components/bttButton";
import { CallToAction } from "./components/CallToAction";
import { ContactUs } from "./components/Contact";
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

function App() {
  return (
    <>
      <main>
        <section className="h-screen w-full">
          <Header />
          <Hero />
        </section>
        <BttButton />
        <AboutUs />
        <Services />
        <PrimaryFeatures />
        <CallToAction />
        <Suspense fallback={<div>Cargando mapa...</div>}>
          <Presence />
        </Suspense>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;

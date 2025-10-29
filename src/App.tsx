import { AboutUs } from "./components/AboutUs";
import BttButton from "./components/bttButton";
import { CallToAction } from "./components/CallToAction";
import { ContactUs } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Presence } from "./components/Presence";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { Services } from "./components/Services";

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
        <Presence />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;

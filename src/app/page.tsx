import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="snap-start min-h-screen">
          <Hero />
        </section>

        <section className="snap-start min-h-screen">
          <About />
        </section>

        <section className="snap-start min-h-screen">
          <Services />
        </section>

        <section className="snap-start min-h-screen">
          <Technology />
        </section>

        <section className="snap-start min-h-screen">
          <Testimonials />
        </section>

        <section className="snap-start min-h-screen">
          <CtaBanner />
        </section>

        <section className="snap-start min-h-screen">
          <Contact />
        </section>

        <section className="snap-start">
          <Footer />
        </section>
      </main>
    </>
  );
}
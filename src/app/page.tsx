import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Stats from "@/components/stats/Stats";
import Process from "@/components/process/Process";
import Signature from "@/components/signature/Signature";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Signature />
      <Stats />
      <Portfolio />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}

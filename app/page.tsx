import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Biography from "../components/Biography";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Research from "../components/Research";
import Publications from "../components/Publications";
import Patents from "../components/Patents";
import Books from "../components/Books";
import Funds from "../components/Funds";
import Awards from "../components/Awards";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <Hero />
        <Stats />
        <About />
        <Biography />
        <Education />
        <Experience />
        <Research />
        <Publications />
        <Patents />
        <Books />
        <Funds />
        <Awards />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
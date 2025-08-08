import Navbar from "./components/Navbar.jsx";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <AnimatedBackground />
      <div className="relative z-10">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="achievements"><Achievements /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </div>
  );
}

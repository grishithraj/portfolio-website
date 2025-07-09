import NavbarDemo from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";
import { ScrollProgress } from "../components/magicui/scroll-progress";
import { TextReveal } from "../components/magicui/text-reveal";

function Home() {
  return (
    <>
      <div className="py-8">
        <NavbarDemo />
        <Hero />
        <TextReveal>Welcome to my portfolio!</TextReveal>
        <Projects />
        <Contact />
        <ScrollProgress />
      </div>
    </>
  );
}
export default Home;

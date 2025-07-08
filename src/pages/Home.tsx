import NavbarDemo from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";
import { ScrollProgress } from "../components/magicui/scroll-progress";

function Home() {
  return (
    <>
      <div className="py-8">
        <NavbarDemo />
        <Hero />
        <Projects />
        <Contact />
        <ScrollProgress />
      </div>
    </>
  );
}
export default Home;

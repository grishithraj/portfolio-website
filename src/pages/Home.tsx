import NavbarDemo from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";
import { ScrollProgress } from "../components/magicui/scroll-progress";
import { TextReveal } from "../components/magicui/text-reveal";
import { BackgroundGradient } from "../components/ui/background-gradient";

function Home() {
  return (
    <>
      <div className="py-8">
        <NavbarDemo />
        <Hero />

        <TextReveal>Welcome to my portfolio!</TextReveal>
        <BackgroundGradient>
          {" "}
          We help creators and businesses stand out with stunning videos and
          modern websites. From engaging edits to responsive web design, we
          craft visuals and experiences that tell your story and leave an
          impact. Let’s bring your ideas to life!
        </BackgroundGradient>

        <Projects />
        <Contact />
        <ScrollProgress />
      </div>
    </>
  );
}
export default Home;

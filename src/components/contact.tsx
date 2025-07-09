import { ShimmerButton } from "../components/magicui/shimmer-button";
import { Particles } from "../components/magicui/particles";

const Contact = () => {
  return (
    <section id="contact" className="text-center py-8 place-items-center">
      <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
      <p className="text-gray-400 mb-4">
        I'd love to hear from you! Reach out via email or socials below.
      </p>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Send Email
        </span>
      </ShimmerButton>
      <div className="relative overflow-hidden h-[500px] w-full">
        <Particles />
      </div>
    </section>
  );
};

export default Contact;

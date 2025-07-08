const Projects = () => {
  return (
    <section id="projects">
      <h3 className="text-3xl font-bold text-center mb-10">
        Featured Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Video Editing Reel</h4>
          <video controls className="w-full rounded">
            <source src="/videos/demo-reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
          <p className="text-gray-300">
            A responsive personal site built with React, TypeScript, and
            Tailwind CSS.
          </p>
          <a
            href="https://github.com/rishithraj/portfolio"
            target="_blank"
            className="text-indigo-400 underline mt-2 inline-block"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

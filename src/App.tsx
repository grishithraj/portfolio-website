import { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-900  text-white transition-colors duration-300">
        <Home />
        {/* <SmoothCursor /> */}
      </div>
    </>
  );
}

export default App;

import Scene3D from "./components/Scene3D";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="page-shell">
      <Scene3D />
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />

      <div className="relative z-10 lg:ml-[320px]">
        <div className="flex justify-center xl:justify-start max-w-[1440px] mx-auto">
          <main className="flex-1 min-w-0 w-full px-5 sm:px-12 md:px-16 lg:px-12 xl:px-16 py-24 lg:py-0 max-w-[900px] xl:max-w-none">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Technologies />
            <Certifications />
            <Contact />
          </main>
          <RightPanel activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}

export default App;

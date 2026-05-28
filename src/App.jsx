import { useState, useEffect } from 'react';
import SplashScreen from "./components/splashscreen";
import Scene3D from "./components/Scene3D";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="relative min-h-screen bg-dark-900">
      <Scene3D />
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-8">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

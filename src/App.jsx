import React, { useState, useEffect } from 'react';
import SplashScreen from "./components/splashscreen";

import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4100); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
  
     
        <div className="absolute top-0 z-[-2] h-screen w-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {loading ? (
        <SplashScreen />
      ) : (
        <div className="container mx-auto px-8">

          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
          </div>
         
        
        
      )}
    </div>
  );
}
export default App;
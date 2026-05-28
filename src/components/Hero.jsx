import { useState, useEffect } from "react";
import profilePic from "../assets/NP.png";
import { motion } from "framer-motion";
import { STATS } from "../constants";
import { HiArrowDown } from "react-icons/hi";

const TITLE = "Software Developer";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < TITLE.length) {
        setDisplayedText(TITLE.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20">
      <div className="w-full flex flex-col xl:grid xl:grid-cols-2 xl:gap-16 xl:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 min-w-0 order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan font-medium tracking-widest uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-5xl xl:text-7xl font-display font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text block mt-2">
              Nagandhra Prasad
            </span>
          </h1>

          <div className="h-14 md:h-16 xl:h-20">
            <span className="text-xl md:text-3xl xl:text-4xl font-display font-semibold text-neutral-300">
              I'm{" "}
              <span className="text-accent-purple">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          <p className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed">
            Software developer with 1.5 years of experience at Ibytes Bits and Bots, building
            AI-driven and scalable web applications with Angular, Python, and LLM integrations.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass p-3 md:p-4 text-center"
              >
                <p className="text-xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-[10px] md:text-sm text-neutral-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-0 flex justify-center mt-12 xl:mt-0 order-2 shrink-0"
        >
          <div className="relative w-64 sm:w-72 md:w-80 xl:w-96">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/40 to-accent-cyan/40 rounded-3xl blur-3xl" />
            <div className="relative glass p-3 rounded-3xl">
              <div className="rounded-2xl overflow-hidden bg-neutral-800/50 ring-2 ring-accent-purple/30 aspect-square flex items-center justify-center">
                <img
                  src={profilePic}
                  alt="Nagandhra Prasad"
                  className="block w-full h-full object-contain"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block glass px-4 py-2 rounded-xl text-sm font-semibold text-accent-cyan">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown className="text-3xl" />
      </motion.button>
    </section>
  );
};

export default Hero;

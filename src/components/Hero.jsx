import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { STATS, RESUME } from "../constants";
import { HiArrowDown, HiDownload } from "react-icons/hi";

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
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 min-w-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan font-medium tracking-widest uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-5xl xl:text-7xl font-display font-bold leading-tight heading-text">
            Hi, I'm{" "}
            <span className="gradient-text block mt-2">
              Nagandhra Prasad
            </span>
          </h1>

          <div className="h-14 md:h-16 xl:h-20">
            <span className="text-xl md:text-3xl xl:text-4xl font-display font-semibold subtle-text">
              I'm{" "}
              <span className="accent-purple-text">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          <p className="body-text text-base md:text-lg max-w-lg leading-relaxed">
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
            <a
              href={RESUME.url}
              download={RESUME.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <HiDownload />
              {RESUME.label}
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
                <p className="text-[10px] md:text-sm body-text mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 body-text link-hover transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown className="text-3xl" />
      </motion.button>
    </section>
  );
};

export default Hero;

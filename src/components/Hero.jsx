import { Suspense } from "react";
import { motion } from "framer-motion";
import { RESUME } from "../constants";
import { HiDownload } from "react-icons/hi";
import HeroScene3D from "./three/HeroScene3D";

const AvatarFallback = () => (
  <div className="avatar-ring">
    <div className="avatar-inner">NP</div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32">
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-14 xl:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl"
      >
        <p className="intro-greeting">Hi, my name is</p>
        <h1 className="intro-name">Nagandhra Prasad.</h1>
        <h2 className="intro-tagline">I build things for the web.</h2>

        <p className="mt-6 text-slate text-lg leading-relaxed max-w-[540px]">
          I'm a software developer specializing in building exceptional digital
          experiences with <span className="text-heading font-medium">Angular</span>,{" "}
          <span className="text-heading font-medium">Python</span>, and{" "}
          <span className="text-heading font-medium">AI/LLM</span> integrations.
          Currently at <span className="text-green">Ibytes Bits and Bots</span> in Chennai.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="btn-outline">Check out my work</a>
          <a
            href={RESUME.url}
            download={RESUME.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <HiDownload /> Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative z-10 flex justify-center lg:justify-end shrink-0"
      >
        <Suspense fallback={<AvatarFallback />}>
          <HeroScene3D />
        </Suspense>
      </motion.div>
    </div>
  </section>
);

export default Hero;

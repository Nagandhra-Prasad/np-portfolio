import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative glass p-3 rounded-3xl tilt-card">
              <img
                src={aboutImg}
                alt="About me"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Turning ideas into{" "}
            <span className="gradient-text">digital reality</span>
          </h3>
          <p className="text-neutral-400 leading-relaxed text-lg">
            {ABOUT_TEXT}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Location", value: "Chennai, India" },
              { label: "Education", value: "M.Sc. CS — Anna University" },
              { label: "Company", value: "Ibytes Bits and Bots" },
              { label: "Experience", value: "1 yr 5 mo" },
              { label: "Focus", value: "AI & Angular Development" },
              { label: "Status", value: "Open to Opportunities" },
            ].map((item) => (
              <div key={item.label} className="glass p-4 rounded-xl">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-neutral-200 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold heading-text">
          Turning ideas into{" "}
          <span className="gradient-text">digital reality</span>
        </h3>
        <p className="body-text leading-relaxed text-lg">
          {ABOUT_TEXT}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {[
            { label: "Location", value: "Chennai, India" },
            { label: "Education", value: "M.Sc. CS — Anna University" },
            { label: "Company", value: "Ibytes Bits and Bots" },
            { label: "Experience", value: "1 yr 5 mo" },
            { label: "Focus", value: "AI & Angular Development" },
            { label: "Status", value: "Open to Opportunities" },
          ].map((item) => (
            <div key={item.label} className="glass p-4 rounded-xl">
              <p className="text-xs muted-text uppercase tracking-wider">{item.label}</p>
              <p className="text-sm font-semibold label-text mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";

const words = ["Creative", "Resourceful", "Reliable"];

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center"
        >
          <span className="text-3xl font-display font-bold text-white">NP</span>
        </motion.div>

        <div className="space-y-2">
          {words.map((word, i) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.4, duration: 0.5 }}
              className="text-3xl md:text-5xl font-display font-bold gradient-text"
            >
              {word}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink rounded-full max-w-xs mx-auto"
        />
      </div>
    </div>
  );
}

export default SplashScreen;

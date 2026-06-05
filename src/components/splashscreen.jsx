import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center page-shell">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--accent)] flex items-center justify-center mb-6">
          <span className="text-xl font-display font-bold text-white dark:text-[#030303]">NP</span>
        </div>
        <p className="font-display text-lg font-semibold heading-text tracking-tight">
          Nagandhra Prasad
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-0.5 w-24 mx-auto mt-6 bg-[var(--accent)] origin-left"
        />
      </motion.div>
    </div>
  );
}

export default SplashScreen;

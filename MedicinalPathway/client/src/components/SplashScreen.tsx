import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const SplashScreen = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-purple-900/80 backdrop-blur-sm" />
      <motion.div 
        className="relative z-10 text-center px-6 py-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <motion.div 
          className="w-28 h-28 mx-auto mb-6 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FlaskConical className="w-14 h-14 text-blue-600" />
        </motion.div>
        <motion.h1 
          className="text-3xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Developed by
        </motion.h1>
        <motion.h2 
          className="text-4xl font-bold text-white tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Om. Santosh. Verma
        </motion.h2>
        <motion.h3 
          className="text-2xl font-semibold text-white mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          IDEAL COLLEGE OF PHARMACY
        </motion.h3>
        <motion.div 
          className="mt-8 w-16 h-1 bg-white mx-auto rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;

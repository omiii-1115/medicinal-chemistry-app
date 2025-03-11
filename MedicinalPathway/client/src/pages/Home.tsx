import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FlaskConical, Activity, Brain } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Home = () => {
  const [_, setLocation] = useLocation();
  const { isDarkMode } = useTheme();

  const handleCategoryClick = useCallback(() => {
    setLocation("/category");
  }, [setLocation]);

  const handleNeuralClick = useCallback(() => {
    setLocation("/neural-signaling");
  }, [setLocation]);

  const cardBgClass = isDarkMode ? "bg-gray-800" : "bg-white";
  const textClass = isDarkMode ? "text-gray-100" : "text-gray-800";
  const subtextClass = isDarkMode ? "text-gray-300" : "text-gray-500";

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary font-montserrat mb-2">Medicinal Chemistry</h1>
          <p className={subtextClass}>Explore the nervous system</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Main Menu Icon */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleCategoryClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={`w-64 h-64 ${cardBgClass} rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 border-2 border-primary`}>
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FlaskConical className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary font-montserrat">Medicinal Chemistry</h2>
              <p className={`text-sm ${subtextClass} mt-2`}>Tap to explore</p>
              <div className={`mt-4 text-xs ${subtextClass}`}>
                <span className="mr-1">→</span> Nervous System Studies
              </div>
            </div>
          </motion.div>

          {/* Neural Signaling Animation Card */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleNeuralClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className={`w-64 h-64 ${cardBgClass} rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 border-2 border-blue-400`}>
              <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Activity className="w-12 h-12 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-blue-500 font-montserrat">Neural Signaling</h2>
              <p className={`text-sm ${subtextClass} mt-2`}>Interactive Animations</p>
              <div className={`mt-4 text-xs ${subtextClass}`}>
                <span className="mr-1">→</span> Neurotransmitter Visualization
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated arrow indicator */}
        <motion.div 
          className="mt-12 text-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <p className={`text-sm ${subtextClass} mb-2 text-center`}>Tap a card to begin</p>
          <div className="flex justify-center">
            <Brain className="w-6 h-6 text-primary opacity-70" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface NeuronAnimationProps {
  isPlaying?: boolean;
  loopCount?: number;
  speed?: number;
  className?: string;
}

const NeuronAnimation = ({
  isPlaying = true,
  loopCount = Infinity,
  speed = 1,
  className = "",
}: NeuronAnimationProps) => {
  const { isDarkMode } = useTheme();
  const [animationCount, setAnimationCount] = useState(0);
  const [isActive, setIsActive] = useState(isPlaying);

  // Control animation playback
  useEffect(() => {
    setIsActive(isPlaying);
  }, [isPlaying]);

  // Handle loop count
  useEffect(() => {
    if (animationCount >= loopCount && loopCount !== Infinity) {
      setIsActive(false);
    }
  }, [animationCount, loopCount]);

  // Colors based on theme
  const axonColor = isDarkMode ? "#60a5fa" : "#2563eb";
  const pulseColor = isDarkMode ? "#93c5fd" : "#3b82f6";
  const cellBodyColor = isDarkMode ? "#93c5fd" : "#3b82f6";
  const dendriteColor = isDarkMode ? "#60a5fa" : "#2563eb";
  const synapseBgColor = isDarkMode ? "#1e293b" : "#f1f5f9";
  const synapseColor = isDarkMode ? "#60a5fa" : "#2563eb";

  // Animation duration in seconds
  const duration = 3 / speed;

  return (
    <div className={`relative w-full h-64 ${className}`}>
      {/* Neuron Cell Body */}
      <motion.div
        className="absolute left-8 top-1/2 w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: cellBodyColor,
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0.7 }}
        animate={isActive ? { 
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: isActive ? Infinity : 0,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-full"
          style={{
            backgroundColor: isDarkMode ? "#0f172a" : "#fff",
            boxShadow: `0 0 10px 3px ${cellBodyColor}`,
          }}
          initial={{ opacity: 0.7 }}
          animate={isActive ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Dendrites */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`dendrite-${i}`}
          className="absolute rounded-full"
          style={{
            left: "8px",
            top: `${24 + i * 14}%`,
            width: "50px",
            height: "3px",
            backgroundColor: dendriteColor,
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0.3, opacity: 0.3 }}
          animate={isActive ? { 
            scaleX: [0.3, 1, 0.3], 
            opacity: [0.3, 0.8, 0.3] 
          } : {}}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Axon */}
      <div
        className="absolute top-1/2 rounded-full"
        style={{
          left: "64px",
          width: "calc(100% - 140px)",
          height: "6px",
          backgroundColor: axonColor,
          transform: "translateY(-50%)",
        }}
      />

      {/* Signal Transmission Animation */}
      {isActive && (
        <motion.div
          className="absolute top-1/2 w-12 h-12 rounded-full"
          style={{
            backgroundColor: pulseColor,
            filter: `blur(10px)`,
            transform: "translateY(-50%)",
          }}
          initial={{ x: 64, opacity: 0 }}
          animate={{ x: "calc(100% - 76px)", opacity: [0, 1, 0] }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: loopCount === Infinity ? Infinity : loopCount - animationCount,
            repeatType: "loop",
            onRepeat: () => setAnimationCount(prev => prev + 1),
          }}
        />
      )}

      {/* Synapse */}
      <div
        className="absolute right-8 top-1/2 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: synapseBgColor,
          transform: "translateY(-50%)",
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full"
          style={{
            border: `3px solid ${synapseColor}`,
            backgroundColor: "transparent",
          }}
          initial={{ opacity: 0.5 }}
          animate={isActive ? {
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: (duration * 0.8),
          }}
        />
      </div>

      {/* Neurotransmitter release animation */}
      {isActive && (
        <motion.div
          className="absolute right-8 top-1/2 flex"
          style={{
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: pulseColor,
                boxShadow: `0 0 6px 2px ${pulseColor}`,
              }}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, (i % 2 === 0 ? 20 : -20) * Math.sin((i * Math.PI) / 4)],
                y: [0, (i % 2 === 0 ? -20 : 20) * Math.cos((i * Math.PI) / 4)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: isActive ? Infinity : 0,
                delay: (duration * 0.85) + (i * 0.06),
                repeatDelay: duration - 0.6,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Control Button */}
      <button
        onClick={() => setIsActive(prev => !prev)}
        className="absolute bottom-0 right-0 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-lg dark:text-white shadow-md transition-colors"
      >
        {isActive ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default NeuronAnimation;
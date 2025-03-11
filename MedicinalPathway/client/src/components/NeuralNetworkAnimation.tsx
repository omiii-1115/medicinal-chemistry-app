import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import NeuronAnimation from "./NeuronAnimation";

interface NeuralNetworkAnimationProps {
  isPlaying?: boolean;
  className?: string;
}

const NeuralNetworkAnimation = ({
  isPlaying = true,
  className = "",
}: NeuralNetworkAnimationProps) => {
  const { isDarkMode } = useTheme();
  const [isActive, setIsActive] = useState(isPlaying);
  const [triggerSecondNeuron, setTriggerSecondNeuron] = useState(false);
  const [triggerThirdNeuron, setTriggerThirdNeuron] = useState(false);

  // Control animation playback
  useEffect(() => {
    setIsActive(isPlaying);
  }, [isPlaying]);

  // Trigger second neuron after delay
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setTriggerSecondNeuron(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setTriggerSecondNeuron(false);
    }
  }, [isActive]);

  // Trigger third neuron after delay
  useEffect(() => {
    if (triggerSecondNeuron) {
      const timer = setTimeout(() => {
        setTriggerThirdNeuron(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setTriggerThirdNeuron(false);
    }
  }, [triggerSecondNeuron]);

  // Background color based on theme
  const bgColor = isDarkMode ? "bg-gray-900/60" : "bg-white/60";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-800";

  return (
    <div className={`relative p-4 rounded-xl ${bgColor} backdrop-blur-sm shadow-lg ${className}`}>
      <h2 className={`text-xl font-semibold mb-4 ${textColor}`}>Neural Signal Transmission</h2>
      
      <div className="space-y-2">
        {/* First layer - Sensory neuron */}
        <div className="relative">
          <div className={`absolute left-4 -top-2 text-sm font-medium ${textColor}`}>Sensory Neuron</div>
          <NeuronAnimation 
            isPlaying={isActive} 
            speed={0.8} 
          />
        </div>
        
        {/* Connector animation */}
        <div className="relative h-16 flex justify-center">
          {isActive && (
            <motion.div
              className="w-1 bg-blue-500 dark:bg-blue-400"
              style={{ 
                height: "100%",
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0.7], scaleY: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          )}
        </div>
        
        {/* Second layer - Interneuron */}
        <div className="relative">
          <div className={`absolute left-4 -top-2 text-sm font-medium ${textColor}`}>Interneuron</div>
          <NeuronAnimation 
            isPlaying={triggerSecondNeuron} 
            speed={1} 
          />
        </div>
        
        {/* Connector animation */}
        <div className="relative h-16 flex justify-center">
          {triggerSecondNeuron && (
            <motion.div
              className="w-1 bg-blue-500 dark:bg-blue-400"
              style={{ 
                height: "100%",
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0.7], scaleY: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          )}
        </div>
        
        {/* Third layer - Motor neuron */}
        <div className="relative">
          <div className={`absolute left-4 -top-2 text-sm font-medium ${textColor}`}>Motor Neuron</div>
          <NeuronAnimation 
            isPlaying={triggerThirdNeuron} 
            speed={1.2} 
          />
        </div>
        
        {/* Information panel */}
        <motion.div 
          className={`mt-6 p-3 rounded-lg border ${isDarkMode ? 'border-blue-700 bg-blue-900/30' : 'border-blue-200 bg-blue-50'} ${textColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3 className="font-medium mb-1">Key Neuronal Components:</h3>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Cell Body (Soma): Metabolic center of the neuron</li>
            <li>Dendrites: Receive incoming signals from other neurons</li>
            <li>Axon: Transmits electrical signals away from the cell body</li>
            <li>Synapse: Junction where signals pass between neurons</li>
          </ul>
        </motion.div>
      </div>
      
      {/* Control Button */}
      <button
        onClick={() => {
          setIsActive(prev => !prev);
          if (!isActive) {
            setTriggerSecondNeuron(false);
            setTriggerThirdNeuron(false);
          }
        }}
        className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
      >
        {isActive ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default NeuralNetworkAnimation;
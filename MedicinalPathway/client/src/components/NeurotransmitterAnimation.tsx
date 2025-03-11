import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface NeurotransmitterAnimationProps {
  isPlaying?: boolean;
  className?: string;
  neurotransmitter?: 'acetylcholine' | 'serotonin' | 'dopamine' | 'gaba';
}

const NeurotransmitterAnimation = ({
  isPlaying = true,
  className = '',
  neurotransmitter = 'acetylcholine',
}: NeurotransmitterAnimationProps) => {
  const { isDarkMode } = useTheme();
  const [isActive, setIsActive] = useState(isPlaying);
  const [showReceptorActive, setShowReceptorActive] = useState(false);
  const [showCellResponse, setShowCellResponse] = useState(false);

  // Control animation playback
  useEffect(() => {
    setIsActive(isPlaying);
    setShowReceptorActive(false);
    setShowCellResponse(false);
  }, [isPlaying]);

  // Control animation sequence
  useEffect(() => {
    if (isActive) {
      const receptorTimer = setTimeout(() => {
        setShowReceptorActive(true);
      }, 2500);

      const responseTimer = setTimeout(() => {
        setShowCellResponse(true);
      }, 3800);

      return () => {
        clearTimeout(receptorTimer);
        clearTimeout(responseTimer);
      };
    } else {
      setShowReceptorActive(false);
      setShowCellResponse(false);
    }
  }, [isActive]);

  // Neurotransmitter properties
  const getConfig = () => {
    switch (neurotransmitter) {
      case 'dopamine':
        return {
          color: isDarkMode ? '#f472b6' : '#ec4899',
          lightColor: isDarkMode ? '#fbcfe8' : '#f9a8d4',
          name: 'Dopamine',
          description: 'Involved in reward, motivation, and motor control',
          receptorColor: isDarkMode ? '#be185d' : '#db2777',
        };
      case 'serotonin':
        return {
          color: isDarkMode ? '#a78bfa' : '#8b5cf6',
          lightColor: isDarkMode ? '#ddd6fe' : '#c4b5fd',
          name: 'Serotonin',
          description: 'Regulates mood, appetite, and sleep',
          receptorColor: isDarkMode ? '#6d28d9' : '#7c3aed',
        };
      case 'gaba':
        return {
          color: isDarkMode ? '#93c5fd' : '#60a5fa',
          lightColor: isDarkMode ? '#dbeafe' : '#bfdbfe',
          name: 'GABA',
          description: 'The main inhibitory neurotransmitter in the brain',
          receptorColor: isDarkMode ? '#2563eb' : '#3b82f6',
        };
      case 'acetylcholine':
      default:
        return {
          color: isDarkMode ? '#34d399' : '#10b981',
          lightColor: isDarkMode ? '#a7f3d0' : '#6ee7b7',
          name: 'Acetylcholine',
          description: 'Involved in muscle activation, attention, and arousal',
          receptorColor: isDarkMode ? '#047857' : '#059669',
        };
    }
  };

  const config = getConfig();
  const bgColor = isDarkMode ? 'bg-gray-900/70' : 'bg-white/80';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';

  return (
    <div 
      className={`relative p-4 rounded-xl ${bgColor} backdrop-blur-sm shadow-lg ${className}`}
      style={{ minHeight: '480px' }}
    >
      <h2 className={`text-xl font-semibold mb-2 ${textColor}`}>{config.name} Receptor Binding</h2>
      <p className={`text-sm mb-6 ${textColor}`}>{config.description}</p>

      <div className="relative h-80 w-full">
        {/* Presynaptic neuron portion */}
        <div 
          className={`absolute left-0 top-1/4 w-20 h-40 rounded-l-xl`}
          style={{ backgroundColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}
        >
          {/* Vesicles with neurotransmitters */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`vesicle-${i}`}
              className="absolute rounded-full flex items-center justify-center"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#cbd5e1',
                width: '20px',
                height: '20px',
                left: i % 2 === 0 ? '25%' : '55%',
                top: `${20 + i * 20}%`,
              }}
              initial={{ scale: 1 }}
              animate={isActive ? { scale: [1, 1.1, 1] } : {}}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: isActive ? Infinity : 0,
                repeatDelay: 4,
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: config.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Synaptic cleft */}
        <div 
          className="absolute left-20 top-1/4 w-20 h-40"
          style={{ 
            background: `linear-gradient(to right, ${isDarkMode ? '#1e293b' : '#e2e8f0'}, transparent)`,
            opacity: 0.5,
          }}
        >
          {/* Neurotransmitter particles */}
          {isActive && [...Array(8)].map((_, i) => (
            <motion.div
              key={`nt-${i}`}
              className="absolute w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'transparent',
                left: '10%',
                top: '50%',
              }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                x: 80,
                y: [0, (i % 2 === 0 ? -15 : 15) * Math.sin((i * Math.PI) / 4)],
              }}
              transition={{
                duration: 2.5,
                delay: 1 + (i * 0.2),
                repeat: isActive ? Infinity : 0,
                repeatDelay: 3,
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: config.color,
                  boxShadow: `0 0 8px 2px ${config.lightColor}`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Postsynaptic neuron with receptors */}
        <div 
          className={`absolute right-0 top-1/4 w-60 h-40 rounded-r-xl`}
          style={{ backgroundColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}
        >
          {/* Receptor proteins */}
          {[...Array(3)].map((_, i) => (
            <div key={`receptor-${i}`} className="relative">
              <motion.div
                className="absolute rounded-md flex items-center justify-center overflow-hidden"
                style={{
                  width: '30px',
                  height: '40px',
                  right: '90%',
                  top: `${20 + i * 30}%`,
                  backgroundColor: config.receptorColor,
                  border: `2px solid ${isDarkMode ? '#475569' : '#94a3b8'}`,
                }}
                initial={{ x: 0 }}
                animate={showReceptorActive && i === 1 ? { x: [0, 5, 0] } : {}}
                transition={{
                  duration: 1,
                  repeat: showReceptorActive ? 3 : 0,
                  repeatType: "mirror",
                }}
              >
                <motion.div
                  className="absolute w-full h-1/2 bottom-0"
                  style={{ 
                    backgroundColor: config.color,
                    opacity: 0.6,
                  }}
                  initial={{ y: 40 }}
                  animate={showReceptorActive && i === 1 ? { y: 0 } : { y: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: i === 1 ? 2.3 : 0,
                  }}
                />
              </motion.div>
            </div>
          ))}

          {/* Cell response animation */}
          {showCellResponse && (
            <motion.div
              className="absolute right-0 top-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`response-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: config.color,
                    boxShadow: `0 0 6px 2px ${config.lightColor}`,
                    right: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.05 * i,
                    repeat: 1,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Labels */}
        <div className={`absolute left-0 top-0 text-xs font-medium ${textColor}`}>Presynaptic Neuron</div>
        <div className={`absolute right-0 top-0 text-xs font-medium ${textColor}`}>Postsynaptic Neuron</div>
        <div className={`absolute left-1/3 top-1/6 -translate-x-1/2 text-xs font-medium ${textColor}`}>Synaptic Cleft</div>
        <div className={`absolute right-1/3 bottom-0 text-xs font-medium ${textColor}`}>Receptor Proteins</div>
      </div>

      {/* Information panel */}
      <motion.div 
        className={`mt-2 p-3 rounded-lg border ${
          isDarkMode 
            ? `border-${config.color.replace('#', '')} bg-opacity-20 bg-black` 
            : `border-${config.lightColor.replace('#', '')} bg-opacity-20 bg-white`
        } ${textColor}`}
        style={{
          borderColor: config.color,
          backgroundColor: isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="font-medium mb-1">Mechanism of Action:</h3>
        <ul className="text-sm space-y-1 list-disc pl-4">
          <li>Neurotransmitters are released from synaptic vesicles</li>
          <li>They diffuse across the synaptic cleft</li>
          <li>Binding to specific receptors triggers conformational changes</li>
          <li>This initiates signaling cascades in the postsynaptic neuron</li>
          <motion.li 
            className="font-medium"
            initial={{ opacity: 0 }}
            animate={showCellResponse ? { opacity: 1 } : { opacity: 0 }}
          >
            Many drugs work by modulating these receptor interactions
          </motion.li>
        </ul>
      </motion.div>

      {/* Control buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={() => setIsActive(prev => !prev)}
          className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
        >
          {isActive ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default NeurotransmitterAnimation;
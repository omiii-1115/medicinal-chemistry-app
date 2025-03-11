import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Activity, ArrowUpDown, Lightbulb } from "lucide-react";
import NeuronAnimation from "@/components/NeuronAnimation";
import NeuralNetworkAnimation from "@/components/NeuralNetworkAnimation";
import NeurotransmitterAnimation from "@/components/NeurotransmitterAnimation";
import BackButton from "@/components/BackButton";

const neurotransmitters = [
  { id: 'acetylcholine', name: 'Acetylcholine', description: 'Key for muscle activation' },
  { id: 'dopamine', name: 'Dopamine', description: 'Reward and motivation' },
  { id: 'serotonin', name: 'Serotonin', description: 'Mood and sleep regulation' },
  { id: 'gaba', name: 'GABA', description: 'Inhibitory neurotransmitter' },
];

const NeuralSignaling = () => {
  const { isDarkMode } = useTheme();
  const [selectedTab, setSelectedTab] = useState("overview");
  const [activeNeurotransmitter, setActiveNeurotransmitter] = useState<any>("acetylcholine");

  const bgClass = isDarkMode ? "bg-gray-800/70" : "bg-white/80";
  const textClass = isDarkMode ? "text-white" : "text-gray-800";
  const borderClass = isDarkMode ? "border-gray-700" : "border-gray-200";
  const highlightClass = isDarkMode ? "bg-blue-800" : "bg-blue-100";

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <BackButton to="/" />
        <h1 className={`text-3xl font-bold ${textClass}`}>Neural Signal Transmission</h1>
        <div className="w-8"></div> {/* Spacer for alignment */}
      </div>

      {/* Tabs */}
      <div className={`flex flex-wrap mb-6 p-1 rounded-lg ${bgClass} backdrop-blur-sm`}>
        <button
          onClick={() => setSelectedTab("overview")}
          className={`flex items-center px-4 py-2 rounded-md mr-2 mb-2 transition-all ${
            selectedTab === "overview" 
              ? `${highlightClass} font-medium` 
              : `${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`
          }`}
        >
          <Brain className="w-4 h-4 mr-2" />
          Overview
        </button>
        <button
          onClick={() => setSelectedTab("single-neuron")}
          className={`flex items-center px-4 py-2 rounded-md mr-2 mb-2 transition-all ${
            selectedTab === "single-neuron" 
              ? `${highlightClass} font-medium` 
              : `${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`
          }`}
        >
          <Activity className="w-4 h-4 mr-2" />
          Single Neuron
        </button>
        <button
          onClick={() => setSelectedTab("network")}
          className={`flex items-center px-4 py-2 rounded-md mr-2 mb-2 transition-all ${
            selectedTab === "network" 
              ? `${highlightClass} font-medium` 
              : `${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`
          }`}
        >
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Neural Network
        </button>
        <button
          onClick={() => setSelectedTab("neurotransmitters")}
          className={`flex items-center px-4 py-2 rounded-md mb-2 transition-all ${
            selectedTab === "neurotransmitters" 
              ? `${highlightClass} font-medium` 
              : `${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`
          }`}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Neurotransmitters
        </button>
      </div>

      {/* Content based on selected tab */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        {selectedTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm`}>
              <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Understanding Neural Signaling</h2>
              <p className={`mb-4 ${textClass}`}>
                Neural signaling is the process by which neurons communicate with each other. This communication is essential for all brain functions, from simple reflexes to complex cognition.
              </p>
              <p className={`mb-4 ${textClass}`}>
                The animations in this section demonstrate:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${textClass}`}>
                <li>How electrical signals travel along a neuron</li>
                <li>How signals are passed between multiple neurons</li>
                <li>How neurotransmitters facilitate chemical signaling</li>
                <li>How drugs can modulate these processes</li>
              </ul>
              <p className={`mt-4 italic ${textClass}`}>
                Explore the tabs above to see detailed animations of each process.
              </p>
            </div>
            <div>
              <NeuronAnimation className={`mb-6 p-4 rounded-xl ${bgClass} backdrop-blur-sm`} />
              <div className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm`}>
                <h3 className={`text-xl font-semibold mb-3 ${textClass}`}>Medicinal Chemistry Connection</h3>
                <p className={`${textClass}`}>
                  Many drugs target neural signaling pathways. Understanding how neurons communicate helps in developing medications for conditions like epilepsy, depression, and Parkinson's disease.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "single-neuron" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm lg:col-span-1`}>
              <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Neuron Structure & Function</h2>
              <p className={`mb-4 ${textClass}`}>
                A neuron consists of:
              </p>
              <ul className={`list-disc pl-6 space-y-3 ${textClass}`}>
                <li>
                  <span className="font-medium">Cell Body (Soma):</span> Contains the nucleus and is the metabolic center
                </li>
                <li>
                  <span className="font-medium">Dendrites:</span> Branch-like structures that receive signals from other neurons
                </li>
                <li>
                  <span className="font-medium">Axon:</span> A long fiber that conducts electrical impulses away from the cell body
                </li>
                <li>
                  <span className="font-medium">Synaptic Terminals:</span> End structures that release neurotransmitters
                </li>
              </ul>
              <h3 className={`text-xl font-semibold mt-6 mb-3 ${textClass}`}>Signal Propagation</h3>
              <p className={`${textClass}`}>
                The animation demonstrates how an action potential travels along the axon of a neuron, from the cell body to the synaptic terminal, where it triggers the release of neurotransmitters.
              </p>
            </div>
            <div className="lg:col-span-2">
              <NeuronAnimation 
                className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm h-full`} 
                isPlaying={true}
                speed={0.7}
              />
            </div>
          </div>
        )}

        {selectedTab === "network" && (
          <div>
            <div className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm mb-6`}>
              <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Neural Networks</h2>
              <p className={`${textClass}`}>
                Neurons don't work in isolation. They form complex networks where signals pass from one neuron to another. 
                The animation below shows how a signal is transmitted through a simple three-neuron circuit, from sensory 
                input to motor output.
              </p>
            </div>
            <NeuralNetworkAnimation className="w-full" />
          </div>
        )}

        {selectedTab === "neurotransmitters" && (
          <div>
            <div className={`p-6 rounded-xl ${bgClass} backdrop-blur-sm mb-6`}>
              <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Neurotransmitter Action</h2>
              <p className={`mb-4 ${textClass}`}>
                Neurotransmitters are chemical messengers that transmit signals across synapses. Different neurotransmitters have different effects on the nervous system.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {neurotransmitters.map((nt) => (
                  <button
                    key={nt.id}
                    onClick={() => setActiveNeurotransmitter(nt.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      activeNeurotransmitter === nt.id
                        ? 'bg-blue-500 text-white'
                        : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {nt.name}
                  </button>
                ))}
              </div>
            </div>
            
            <NeurotransmitterAnimation 
              neurotransmitter={activeNeurotransmitter} 
              className="w-full" 
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NeuralSignaling;
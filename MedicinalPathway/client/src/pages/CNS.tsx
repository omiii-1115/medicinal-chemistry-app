import { useState } from "react";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import DetailModal from "@/components/DetailModal";
import { brainParts } from "@/data/brainParts";

const CNS = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  
  const handlePartClick = (partId: string) => {
    setSelectedPart(partId);
  };
  
  const handleCloseModal = () => {
    setSelectedPart(null);
  };
  
  const selectedPartData = selectedPart 
    ? brainParts.find(part => part.id === selectedPart) 
    : null;

  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-30">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col p-6 pt-16">
        {/* Back Button */}
        <BackButton to="/category" color="text-[#2563EB]" />
        
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#2563EB] font-montserrat mb-2">Central Nervous System</h1>
          <p className="text-medium">Structure & Function</p>
        </motion.div>

        {/* CNS Introduction */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-[#2563EB] mb-4 font-montserrat">Introduction</h2>
          <p className="text-medium mb-4">
            The brain is divided into 2 hemispheres, the left and the right. While in constant communication, the left and right hemispheres are responsible for different behaviors, known as brain lateralization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#2563EB]/5 p-4 rounded-lg">
              <h3 className="font-bold text-[#2563EB] mb-2">Left Hemisphere</h3>
              <p className="text-sm">More dominant in language, logic, and math abilities.</p>
            </div>
            <div className="bg-[#2563EB]/5 p-4 rounded-lg">
              <h3 className="font-bold text-[#2563EB] mb-2">Right Hemisphere</h3>
              <p className="text-sm">More creative and dominant in artistic and musical situations and intuition.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Brain Anatomy Icons */}
        <motion.h2 
          className="text-xl font-bold text-dark font-montserrat mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Brain Anatomy
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {brainParts.map((part, index) => (
            <motion.div
              key={part.id}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              onClick={() => handlePartClick(part.id)}
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-2">
                <i className={`fas ${part.icon} text-[#2563EB]`}></i>
              </div>
              <h3 className="text-sm font-semibold">{part.title}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Detail Modal */}
        {selectedPartData && (
          <DetailModal
            isOpen={!!selectedPart}
            onClose={handleCloseModal}
            title={selectedPartData.title}
            content={selectedPartData.content}
            color={selectedPartData.color}
          />
        )}
      </div>
    </div>
  );
};

export default CNS;

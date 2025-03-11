import { useState } from "react";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import DetailModal from "@/components/DetailModal";
import { parasympatholiticInfo } from "@/data/receptorInfo";

const Parasympatholytic = () => {
  const [selectedReceptor, setSelectedReceptor] = useState<string | null>(null);
  
  const handleReceptorClick = (receptorId: string) => {
    setSelectedReceptor(receptorId);
  };
  
  const handleCloseModal = () => {
    setSelectedReceptor(null);
  };
  
  const selectedReceptorData = selectedReceptor 
    ? parasympatholiticInfo.find(receptor => receptor.id === selectedReceptor) 
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
        <BackButton to="/ans" color="text-[#7C3AED]" />
        
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#7C3AED] font-montserrat mb-2">Parasympatholytic Agents</h1>
          <p className="text-medium">Classification & Mechanism</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {parasympatholiticInfo.map((receptor, index) => (
            <motion.div
              key={receptor.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              onClick={() => handleReceptorClick(receptor.id)}
            >
              <div className="bg-[#7C3AED]/20 p-4">
                <h2 className="text-xl font-bold text-[#7C3AED]">{receptor.title}</h2>
              </div>
              <div className="p-4">
                <p className="text-sm text-medium mb-3">
                  {receptor.content.split('\n\n')[0]}
                </p>
                <div className="flex items-center text-xs text-[#7C3AED]">
                  <i className="fas fa-info-circle mr-1"></i> Tap for detailed information
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Detail Modal */}
        {selectedReceptorData && (
          <DetailModal
            isOpen={!!selectedReceptor}
            onClose={handleCloseModal}
            title={selectedReceptorData.title}
            content={selectedReceptorData.content}
            color={selectedReceptorData.color}
          />
        )}
      </div>
    </div>
  );
};

export default Parasympatholytic;

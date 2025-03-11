import { useCallback } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";

const Category = () => {
  const [_, setLocation] = useLocation();

  const handleCNSClick = useCallback(() => {
    setLocation("/cns");
  }, [setLocation]);

  const handleANSClick = useCallback(() => {
    setLocation("/ans");
  }, [setLocation]);

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Back Button */}
        <BackButton to="/" />
        
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-dark font-montserrat mb-2">Nervous System</h1>
          <p className="text-medium">Select a category to explore</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* CNS Card */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleCNSClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="h-64 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-cns">
              <div className="h-1/2 bg-[#2563EB] flex items-center justify-center">
                <i className="fas fa-brain text-5xl text-white"></i>
              </div>
              <div className="h-1/2 p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-[#2563EB] font-montserrat">CNS</h2>
                <p className="text-sm text-medium mt-2">Central Nervous System</p>
                <div className="mt-3 px-4 py-1 bg-[#2563EB]/10 rounded-full">
                  <span className="text-xs text-[#2563EB] font-medium">Brain & Spinal Cord</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* ANS Card */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleANSClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="h-64 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-ans">
              <div className="h-1/2 bg-[#7C3AED] flex items-center justify-center">
                <i className="fas fa-network-wired text-5xl text-white"></i>
              </div>
              <div className="h-1/2 p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-[#7C3AED] font-montserrat">ANS</h2>
                <p className="text-sm text-medium mt-2">Autonomic Nervous System</p>
                <div className="mt-3 px-4 py-1 bg-[#7C3AED]/10 rounded-full">
                  <span className="text-xs text-[#7C3AED] font-medium">Sympathetic & Parasympathetic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Category;

import { useCallback } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";

const ANS = () => {
  const [_, setLocation] = useLocation();

  const handleSympatholiticClick = useCallback(() => {
    setLocation("/sympatholytic");
  }, [setLocation]);

  const handleParasympatholiticClick = useCallback(() => {
    setLocation("/parasympatholytic");
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
      <div className="relative z-10 min-h-screen flex flex-col p-6 pt-16">
        {/* Back Button */}
        <BackButton to="/category" color="text-[#7C3AED]" />
        
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#7C3AED] font-montserrat mb-2">Autonomic Nervous System</h1>
          <p className="text-medium">Select a category to explore</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {/* Sympatholytic Card */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleSympatholiticClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="h-64 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#7C3AED]">
              <div className="h-1/2 bg-gradient-to-r from-[#7C3AED] to-purple-500 flex items-center justify-center">
                <i className="fas fa-ban text-5xl text-white"></i>
              </div>
              <div className="h-1/2 p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-[#7C3AED] font-montserrat">Sympatholytic</h2>
                <p className="text-sm text-medium mt-2">Blocking sympathetic activity</p>
                <div className="mt-3 px-4 py-1 bg-[#7C3AED]/10 rounded-full">
                  <span className="text-xs text-[#7C3AED] font-medium">Alpha & Beta Blockers</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Parasympatholytic Card */}
          <motion.div 
            className="cursor-pointer"
            onClick={handleParasympatholiticClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="h-64 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#7C3AED]">
              <div className="h-1/2 bg-gradient-to-r from-purple-500 to-[#7C3AED] flex items-center justify-center">
                <i className="fas fa-slash text-5xl text-white"></i>
              </div>
              <div className="h-1/2 p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-[#7C3AED] font-montserrat">Parasympatholytic</h2>
                <p className="text-sm text-medium mt-2">Blocking parasympathetic activity</p>
                <div className="mt-3 px-4 py-1 bg-[#7C3AED]/10 rounded-full">
                  <span className="text-xs text-[#7C3AED] font-medium">Anticholinergics</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ANS;

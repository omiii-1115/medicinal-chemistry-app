import { useCallback } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

type BackButtonProps = {
  to: string;
  color?: string;
};

const BackButton = ({ to, color = "text-primary" }: BackButtonProps) => {
  const [_, setLocation] = useLocation();

  const handleBack = useCallback(() => {
    setLocation(to);
  }, [to, setLocation]);

  return (
    <motion.button 
      onClick={handleBack}
      className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-20 ${color}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <i className="fas fa-arrow-left"></i>
    </motion.button>
  );
};

export default BackButton;

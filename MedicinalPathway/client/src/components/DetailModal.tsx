import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  color: string;
};

const DetailModal = ({ isOpen, onClose, title, content, color }: DetailModalProps) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-lg max-h-[80vh] bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center z-20"
            >
              <i className="fas fa-times text-medium"></i>
            </button>
            
            <div 
              className="p-6 bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${color}, ${color}CC)` }}
            >
              <h2 className="text-2xl font-bold text-white font-montserrat">{title}</h2>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-medium whitespace-pre-line">{content}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;

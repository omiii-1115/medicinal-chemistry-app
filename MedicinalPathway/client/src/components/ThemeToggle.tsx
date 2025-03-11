import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
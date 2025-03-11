import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import SplashScreen from "./components/SplashScreen";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import CNS from "./pages/CNS";
import ANS from "./pages/ANS";
import Sympatholytic from "./pages/Sympatholytic";
import Parasympatholytic from "./pages/Parasympatholytic";
import NeuralSignaling from "./pages/NeuralSignaling";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/cns" component={CNS} />
      <Route path="/ans" component={ANS} />
      <Route path="/sympatholytic" component={Sympatholytic} />
      <Route path="/parasympatholytic" component={Parasympatholytic} />
      <Route path="/neural-signaling" component={NeuralSignaling} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Show splash screen for 4 seconds
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div 
          className="relative w-full min-h-screen overflow-hidden"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}
        >
          {!showSplash && <ThemeToggle />}
          {showSplash ? (
            <SplashScreen />
          ) : (
            <div className="relative z-10 min-h-screen transition-opacity duration-1000 ease-in-out bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <Router />
            </div>
          )}
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

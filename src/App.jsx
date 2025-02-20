import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import Sidebar from "./components/Sidebar";
import { Loading } from "./pages/Loading"; // Confirm correct path

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    console.log("Loading complete!");
    setIsLoaded(true);
  };

  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Loading Overlay */}
      {!isLoaded && (
        <Loading onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div
        className={`flex h-full w-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

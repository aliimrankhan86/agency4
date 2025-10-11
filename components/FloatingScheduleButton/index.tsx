"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/Icon";
import ComingSoonModal from "@/components/ComingSoonModal";

const FloatingScheduleButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleCall = () => {
    setIsModalOpen(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleScheduleCall}
          className="group flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Schedule a call"
        >
          <Icon 
            name="calendar-check" 
            className="text-white" 
            size={20} 
          />
          <span className="font-figtree font-bold text-sm text-white whitespace-nowrap" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
            Schedule a Call
          </span>
          
          {/* Pulse animation - slower with delay */}
          <div 
            className="absolute -inset-1 bg-blue-500 rounded-full opacity-75 animate-ping"
            style={{ 
              animationDuration: '3s',
              animationDelay: '2s'
            }}
          ></div>
        </button>
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingScheduleButton;

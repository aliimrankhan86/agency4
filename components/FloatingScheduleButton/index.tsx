"use client";

import { useState, useEffect } from "react";
import { openCalendlyPopup, loadCalendlyScript } from "@/utils/calendly";
import Icon from "@/components/Icon";

const FloatingScheduleButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleCall = async () => {
    try {
      // Load Calendly script if not already loaded
      await loadCalendlyScript();
      
      // Open Calendly popup
      const success = openCalendlyPopup();
      
      if (!success) {
        // Fallback: redirect to Calendly
        window.open('https://calendly.com/demo-agency4/consultation', '_blank');
      }
    } catch (error) {
      console.error('Error opening Calendly:', error);
      // Fallback: redirect to Calendly
      window.open('https://calendly.com/demo-agency4/consultation', '_blank');
    }
  };

  if (!isVisible) return null;

  return (
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
        <span className="font-figtree font-medium text-sm whitespace-nowrap">
          Schedule a Call
        </span>
        
        {/* Pulse animation - slower with delay */}
        <div 
          className="absolute -inset-1 bg-blue-500 rounded-full opacity-75 animate-ping"
          style={{ 
            animationDuration: '2s',
            animationDelay: '1s'
          }}
        ></div>
      </button>
    </div>
  );
};

export default FloatingScheduleButton;

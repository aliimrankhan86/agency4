/**
 * Calendly Integration - Ready for Implementation
 * 
 * This file contains the setup for when you receive your Calendly account details.
 * 
 * TO INTEGRATE CALENDLY:
 * 1. Update CALENDLY_URL with your actual Calendly URL
 * 2. Update FloatingScheduleButton to use this integration
 * 3. Remove ComingSoonModal and use the Calendly popup instead
 */

import { openCalendlyPopup, loadCalendlyScript } from "@/utils/calendly";

// TODO: Replace with your actual Calendly URL when account is provided
export const CALENDLY_CONFIG = {
  // Example: 'https://calendly.com/your-username/consultation'
  CALENDLY_URL: 'https://calendly.com/demo-agency4/consultation',
  
  // Optional: Pre-fill user data
  PRE_FILL_DATA: {
    name: '',
    email: '',
    customAnswers: {
      a1: '', // Company name
      a2: '', // Phone number
      a3: '', // Message/requirements
    }
  }
};

/**
 * Ready-to-use function for Calendly integration
 * Call this when you want to switch from "Coming Soon" to actual booking
 */
export const handleCalendlyBooking = async (userData?: {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}) => {
  try {
    // Load Calendly script if not already loaded
    await loadCalendlyScript();
    
    // Prepare pre-fill data if user data is provided
    if (userData) {
      CALENDLY_CONFIG.PRE_FILL_DATA = {
        name: userData.name || '',
        email: userData.email || '',
        customAnswers: {
          a1: userData.company || '',
          a2: userData.phone || '',
          a3: userData.message || '',
        }
      };
    }
    
    // Open Calendly popup
    const success = openCalendlyPopup();
    
    if (!success) {
      // Fallback: redirect to Calendly
      window.open(CALENDLY_CONFIG.CALENDLY_URL, '_blank');
    }
  } catch (error) {
    console.error('Error opening Calendly:', error);
    // Fallback: redirect to Calendly
    window.open(CALENDLY_CONFIG.CALENDLY_URL, '_blank');
  }
};

/**
 * Instructions for switching from "Coming Soon" to Calendly:
 * 
 * 1. In FloatingScheduleButton/index.tsx:
 *    - Remove: import ComingSoonModal
 *    - Remove: const [isModalOpen, setIsModalOpen] = useState(false);
 *    - Replace handleScheduleCall with:
 *      const handleScheduleCall = () => {
 *        handleCalendlyBooking();
 *      };
 *    - Remove: <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 * 
 * 2. Update CALENDLY_URL in this file with your actual Calendly URL
 * 
 * 3. Optional: Add user data collection before opening Calendly
 */

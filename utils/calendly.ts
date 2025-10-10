/**
 * Calendly Integration Utilities
 * 
 * This file contains utilities for integrating with Calendly scheduling.
 * Replace the placeholder functions with actual Calendly integration code.
 */

// Calendly user data interface
export interface CalendlyUserData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

// Calendly configuration
export const CALENDLY_CONFIG = {
  // TODO: Replace with your actual Calendly URL
  CALENDLY_URL: 'https://calendly.com/demo-agency4/consultation',
  
  // Optional: Pre-fill user data in Calendly
  PREFILL_DATA: true,
  
  // Optional: Custom Calendly embed settings
  EMBED_SETTINGS: {
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00d4aa', // Lime green color matching your brand
    textColor: '4d4d4d',
  }
};

/**
 * Initialize Calendly popup widget
 * This function will open the Calendly scheduling popup
 */
export const openCalendlyPopup = (userData?: CalendlyUserData) => {
  // TODO: Uncomment and configure when ready to integrate Calendly
  
  // Check if Calendly is loaded
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    const calendlyUrl = userData ? buildCalendlyUrlWithPrefill(userData) : CALENDLY_CONFIG.CALENDLY_URL;
    
    (window as any).Calendly.initPopupWidget({
      url: calendlyUrl,
      ...CALENDLY_CONFIG.EMBED_SETTINGS
    });
    
    return true;
  } else {
    console.warn('Calendly not loaded. Make sure to include the Calendly script in your HTML.');
    return false;
  }
};

/**
 * Build Calendly URL with pre-filled user data
 */
const buildCalendlyUrlWithPrefill = (userData: CalendlyUserData): string => {
  if (!CALENDLY_CONFIG.PREFILL_DATA) {
    return CALENDLY_CONFIG.CALENDLY_URL;
  }

  const params = new URLSearchParams();
  
  // Calendly pre-fill parameters
  if (userData.firstName) params.append('name', `${userData.firstName} ${userData.lastName}`);
  if (userData.email) params.append('email', userData.email);
  if (userData.phone) params.append('a1', userData.phone);
  if (userData.company) params.append('a2', userData.company);
  if (userData.message) params.append('a3', userData.message);
  
  return `${CALENDLY_CONFIG.CALENDLY_URL}?${params.toString()}`;
};

/**
 * Load Calendly script dynamically
 * Call this function when you want to load Calendly on demand
 */
export const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if Calendly is already loaded
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      resolve();
      return;
    }

    // Create and load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Calendly script'));
    
    document.head.appendChild(script);
  });
};

/**
 * Alternative: Direct redirect to Calendly (simpler approach)
 */
export const redirectToCalendly = (userData?: CalendlyUserData) => {
  const calendlyUrl = userData ? buildCalendlyUrlWithPrefill(userData) : CALENDLY_CONFIG.CALENDLY_URL;
  window.open(calendlyUrl, '_blank');
};

/**
 * Integration example for the consultation modal
 */
export const handleCalendlyIntegration = async (userData: CalendlyUserData) => {
  try {
    // Option 1: Load Calendly script and open popup
    await loadCalendlyScript();
    const success = openCalendlyPopup(userData);
    
    if (success) {
      return { success: true, message: 'Calendly popup opened successfully' };
    } else {
      // Fallback to direct redirect
      redirectToCalendly(userData);
      return { success: true, message: 'Redirected to Calendly' };
    }
  } catch (error) {
    console.error('Calendly integration error:', error);
    // Fallback to direct redirect
    redirectToCalendly(userData);
    return { success: true, message: 'Fallback redirect to Calendly' };
  }
};

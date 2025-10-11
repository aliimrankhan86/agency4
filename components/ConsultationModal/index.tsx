"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "../Button";
import Icon from "../Icon";
import { handleCalendlyIntegration, CalendlyUserData } from "@/utils/calendly";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    
    // Basic phone validation - just check it's not empty and has reasonable length
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters';
        if (value.trim().length > 50) return 'Full name must be less than 50 characters';
        // Check if name contains at least some letters (not just numbers/symbols)
        if (!/[a-zA-Z]/.test(value.trim())) return 'Full name must contain letters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (value && !validatePhone(value)) return 'Please enter a valid phone number';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Please tell us about your AI needs';
        if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)';
        if (value.trim().length > 500) return 'Message must be less than 500 characters';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field in real-time for better UX
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle Calendly integration
  const handleCalendlyBooking = async () => {
    setIsSubmitting(true);
    
    try {
      // Split full name into first and last for Calendly API
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      const userData: CalendlyUserData = {
        firstName: firstName,
        lastName: lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: formData.message,
      };

      // TODO: Uncomment the line below when ready to integrate Calendly
      // const result = await handleCalendlyIntegration(userData);
      
      // For now, simulate the process (remove this when Calendly is integrated)
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Calendly integration - User data:", userData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Calendly integration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Validate all required fields
    newErrors.fullName = validateField('fullName', formData.fullName);
    newErrors.email = validateField('email', formData.email);
    newErrors.message = validateField('message', formData.message);
    
    // Validate optional fields if they have values
    if (formData.phone) {
      newErrors.phone = validateField('phone', formData.phone);
    }
    
    setErrors(newErrors);
    
    // Check if there are any errors
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    await handleCalendlyBooking();
  };

  const handleClose = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" onClick={handleClose} />
      
      <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
        <DialogPanel className="mx-auto max-w-lg w-full bg-white rounded-2xl relative my-4 max-h-[90vh] flex flex-col pointer-events-auto shadow-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-100 transition-colors z-10 bg-blue-700 hover:bg-blue-800 rounded-full shadow-md hover:shadow-lg"
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>

          <div className="overflow-y-auto overflow-x-hidden flex-1 p-6 pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
            {!isSubmitted ? (
              <div>
                <div className="text-center mb-6">
                  <h2 className="font-onest text-xl sm:text-2xl font-medium text-blue-700 leading-tight pr-8">
                    Book a Free Consultation<br />
                    with Agency 4
                  </h2>
                  <p className="mt-2 font-figtree text-base text-neutral-500 leading-relaxed">
                    Let's discuss how Agency4 can transform your business with AI
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-neutral-200 focus:border-blue-700 focus:ring-blue-700'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600 font-figtree">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-neutral-200 focus:border-blue-700 focus:ring-blue-700'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 font-figtree">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-colors ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-neutral-200 focus:border-blue-700 focus:ring-blue-700'
                        }`}
                        placeholder=""
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 font-figtree">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                      Tell us about your AI needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-neutral-200 focus:border-blue-700 focus:ring-blue-700'
                      }`}
                      placeholder="Describe your challenges and how AI could help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 font-figtree">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-1">
                    <Button 
                      type="submit" 
                      primary 
                      className="w-full py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Opening Calendar..." : "Schedule Free Consultation"}
                    </Button>
                  </div>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="check" size={32} color="text-blue-800" />
              </div>
              <h2 className="font-onest text-2xl font-medium text-neutral-950 mb-3 leading-tight">
                Consultation Requested!
              </h2>
              <p className="font-figtree text-base text-neutral-500 mb-5 leading-relaxed">
                Thank you for your interest in Agency4. We'll be in touch within 24 hours to schedule your free consultation.
              </p>
              <div>
                <Button onClick={handleClose} primary className="py-3">
                  Close
                </Button>
              </div>
            </div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ConsultationModal;

"use client";

import { useState } from "react";
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Calendly integration
  const handleCalendlyBooking = async () => {
    setIsSubmitting(true);
    
    try {
      const userData: CalendlyUserData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCalendlyBooking();
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-2xl w-full bg-white rounded-2xl p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Close dialog"
          >
            <Icon name="close" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="text-center mb-8">
                <h2 className="font-onest text-3xl font-medium text-neutral-950">
                  Book a Free Consultation
                </h2>
                <p className="mt-4 font-figtree text-base text-neutral-500">
                  Let's discuss how Agency4 can transform your business with AI
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-figtree text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                      placeholder="Enter your email address"
                    />
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
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                      placeholder="Enter your phone number"
                    />
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
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
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
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700 resize-none"
                    placeholder="Describe your current challenges and how AI could help your business..."
                  />
                </div>

                <Button 
                  type="submit" 
                  primary 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening Calendar..." : "Schedule Free Consultation"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="check" size={32} color="text-blue-800" />
              </div>
              <h2 className="font-onest text-3xl font-medium text-neutral-950 mb-4">
                Consultation Requested!
              </h2>
              <p className="font-figtree text-base text-neutral-500 mb-6">
                Thank you for your interest in Agency4. We'll be in touch within 24 hours to schedule your free consultation.
              </p>
              <Button onClick={handleClose} primary>
                Close
              </Button>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ConsultationModal;

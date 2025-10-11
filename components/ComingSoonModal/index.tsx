"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "../Button";
import Icon from "../Icon";

type ComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />
      
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
        <DialogPanel className="mx-auto max-w-md w-full bg-white rounded-2xl relative my-2 sm:my-8 flex flex-col pointer-events-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-100 transition-colors z-10 bg-blue-700 hover:bg-blue-800 rounded-full shadow-md hover:shadow-lg"
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>

          <div className="text-center p-6 sm:p-8 pt-4 sm:pt-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Icon name="calendar-check" size={32} color="text-blue-800" className="sm:w-10 sm:h-10" />
            </div>
            
            <h2 className="font-onest text-xl sm:text-2xl font-medium text-blue-700 leading-tight pr-8">
              Agency4 Booking System<br />
              Coming Soon
            </h2>
            
            <p className="font-figtree text-sm sm:text-base text-neutral-500 mb-6 sm:mb-8 leading-relaxed">
              We're working hard to bring you an integrated booking system. In the meantime, please use our contact form or reach out directly.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <Button 
                onClick={onClose} 
                primary 
                className="w-full py-2.5 sm:py-4"
              >
                Got it
              </Button>
              
              <Button 
                onClick={() => {
                  onClose();
                  // Scroll to contact section or open contact modal
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-2.5 sm:py-4"
              >
                Contact Us Instead
              </Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ComingSoonModal;

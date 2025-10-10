"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextField from "@/components/TextField";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  wantsConsultation: boolean;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    message: "",
    wantsConsultation: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".animate").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New website enquiry

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone || 'Not provided'}
Message: ${formData.message || 'No message provided'}
Wants consultation: ${formData.wantsConsultation ? 'Yes' : 'No'}
      `.trim();

      // For now, use mailto as fallback since no email service is configured
      const mailtoLink = `mailto:support@agency4.ai?subject=New website enquiry&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div id="contact" ref={container} className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate text-center max-w-2xl mx-auto">
            <h1 className="font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
              Thanks, we've got your message
            </h1>
            <p className="mt-4 font-figtree text-lg text-neutral-500">
              We'll reply within one business day at the email you provided.
            </p>
            {formData.wantsConsultation && (
              <div className="mt-8">
                <Button primary>
                  Book a free consultation
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" ref={container} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Contact Agency4
          </h1>
          <p className="mt-4 font-figtree text-lg text-neutral-500">
            Tell us a little about your needs and we'll get back within one business day.
          </p>
        </div>

        <div className="animate max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="w-full animate">
                  <div className="font-figtree text-sm uppercase text-neutral-950">
                    First name <span className="text-blue-600">*</span>
                  </div>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className="mt-2 font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 w-full px-6 py-4 border border-neutral-200 rounded-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <div className="w-full animate">
                  <div className="font-figtree text-sm uppercase text-neutral-950">
                    Last name <span className="text-blue-600">*</span>
                  </div>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className="mt-2 font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 w-full px-6 py-4 border border-neutral-200 rounded-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="w-full animate">
                <div className="font-figtree text-sm uppercase text-neutral-950">
                  Email address <span className="text-blue-600">*</span>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-2 font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 w-full px-6 py-4 border border-neutral-200 rounded-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div className="w-full animate">
                <div className="font-figtree text-sm uppercase text-neutral-950">
                  Phone number
                </div>
                <div className="mt-2 flex">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="font-figtree text-sm text-neutral-950 px-4 py-4 border border-neutral-200 border-r-0 rounded-l-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200 bg-white"
                  >
                    <option value="+1">🇺🇸 +1 (USA/Canada)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="555 123 4567"
                    className="font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 flex-1 px-6 py-4 border border-neutral-200 rounded-r-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="w-full animate">
                <div className="font-figtree text-sm uppercase text-neutral-950">
                  Message
                </div>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your project..."
                  className="mt-2 font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 w-full px-6 py-4 border border-neutral-200 rounded-3xl hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200 resize-none h-40"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consultation"
                checked={formData.wantsConsultation}
                onChange={(e) => handleInputChange('wantsConsultation', e.target.checked)}
                className="h-4 w-4 text-blue-800 focus:ring-blue-700 border-gray-300 rounded"
              />
              <label htmlFor="consultation" className="ml-2 block text-sm text-neutral-700">
                I'd like to book a consultation
              </label>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                primary
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

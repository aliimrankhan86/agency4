"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const UseCases = () => {
  const container = useRef<HTMLDivElement>(null);

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

  return (
    <div
      id="use-cases"
      ref={container}
      className="overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            AI Voice Automation in Action
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20">
          <div className="animate bg-neutral-100 p-10 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              FINANCE
            </div>
            <h3 className="font-onest text-3xl font-medium text-neutral-950 mb-4">
              Streamlined Client Management
            </h3>
            <p className="font-figtree text-lg text-neutral-600 mb-6">
              Automate client onboarding, KYC checks, and payment reminders with compliant voice agents that improve accuracy and trust.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <div className="font-figtree text-sm text-neutral-500 uppercase mb-2">
                Result
              </div>
              <p className="font-figtree text-base text-neutral-950">
                Faster verification, 40% less manual processing, improved customer satisfaction.
              </p>
            </div>
          </div>

          <div className="animate bg-neutral-100 p-10 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              CARE HOMES
            </div>
            <h3 className="font-onest text-3xl font-medium text-neutral-950 mb-4">
              Compassionate Care Communication
            </h3>
            <p className="font-figtree text-lg text-neutral-600 mb-6">
              Manage resident enquiries, appointment scheduling, and family updates with empathy-driven AI voices.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <div className="font-figtree text-sm text-neutral-500 uppercase mb-2">
                Result
              </div>
              <p className="font-figtree text-base text-neutral-950">
                Happier families, less staff pressure, smoother communications 24/7.
              </p>
            </div>
          </div>

          <div className="animate bg-neutral-100 p-10 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              LOGISTICS
            </div>
            <h3 className="font-onest text-3xl font-medium text-neutral-950 mb-4">
              Real-Time Delivery Intelligence
            </h3>
            <p className="font-figtree text-lg text-neutral-600 mb-6">
              Streamline delivery updates, missed call responses, and driver coordination.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <div className="font-figtree text-sm text-neutral-500 uppercase mb-2">
                Result
              </div>
              <p className="font-figtree text-base text-neutral-950">
                60% fewer missed deliveries and stronger customer confidence.
              </p>
            </div>
          </div>

          <div className="animate bg-neutral-100 p-10 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              BOOKING SYSTEMS FOR SMALL BUSINESSES
            </div>
            <h3 className="font-onest text-3xl font-medium text-neutral-950 mb-4">
              Never Miss Another Appointment
            </h3>
            <p className="font-figtree text-lg text-neutral-600 mb-6">
              Enable instant booking, rescheduling, and follow-ups for salons, clinics, and studios.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <div className="font-figtree text-sm text-neutral-500 uppercase mb-2">
                Result
              </div>
              <p className="font-figtree text-base text-neutral-950">
                2× increase in confirmed appointments and no lost leads, even outside business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;


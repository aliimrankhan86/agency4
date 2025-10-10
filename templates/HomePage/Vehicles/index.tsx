"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
import Vehicle from "@/components/Vehicle";
import { vehicles } from "@/mocks/vehicles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Vehicles = () => {
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
    <div ref={container} className="overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-white lg:text-7xl">
            Enterprise-Grade Automation, Simplified
          </h1>
          <p className="animate mt-6 font-figtree text-lg text-neutral-400">
            Our platform combines powerful AI technology with no-code accessibility, making enterprise-level automation available to everyone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          <div className="animate bg-neutral-800 p-8 rounded-2xl border border-neutral-700 shadow-xl">
            <div className="font-figtree text-xs text-blue-500 uppercase tracking-wide mb-3">
              NATURAL VOICES
            </div>
            <h3 className="font-onest text-2xl font-medium text-white mb-4">
              Natural, human-like voices in 40+ languages
            </h3>
            <p className="font-figtree text-base text-neutral-400">
              Our AI voices sound authentic and professional, creating genuine connections with customers across the globe.
            </p>
          </div>

          <div className="animate bg-neutral-800 p-8 rounded-2xl border border-neutral-700 shadow-xl">
            <div className="font-figtree text-xs text-blue-500 uppercase tracking-wide mb-3">
              INTELLIGENT UNDERSTANDING
            </div>
            <h3 className="font-onest text-2xl font-medium text-white mb-4">
              Real-time intent detection with empathy cues
            </h3>
            <p className="font-figtree text-base text-neutral-400">
              Advanced AI understands customer emotions and intent, responding with appropriate empathy and precision.
            </p>
          </div>

          <div className="animate bg-neutral-800 p-8 rounded-2xl border border-neutral-700 shadow-xl">
            <div className="font-figtree text-xs text-blue-500 uppercase tracking-wide mb-3">
              NO-CODE BUILDER
            </div>
            <h3 className="font-onest text-2xl font-medium text-white mb-4">
              Drag-and-drop workflow builder for triggers and actions
            </h3>
            <p className="font-figtree text-base text-neutral-400">
              Create complex automation workflows without writing a single line of code. Simple, visual, powerful.
            </p>
          </div>

          <div className="animate bg-neutral-800 p-8 rounded-2xl border border-neutral-700 shadow-xl">
            <div className="font-figtree text-xs text-blue-500 uppercase tracking-wide mb-3">
              SEAMLESS INTEGRATIONS
            </div>
            <h3 className="font-onest text-2xl font-medium text-white mb-4">
              Secure integrations with CRM, email, WhatsApp, and SMS
            </h3>
            <p className="font-figtree text-base text-neutral-400">
              Connect to your existing tools instantly. Works with Salesforce, HubSpot, Twilio, and dozens more.
            </p>
          </div>

          <div className="animate bg-neutral-800 p-8 rounded-2xl border border-neutral-700 shadow-xl lg:col-span-2">
            <div className="font-figtree text-xs text-blue-500 uppercase tracking-wide mb-3">
              LIVE ANALYTICS
            </div>
            <h3 className="font-onest text-2xl font-medium text-white mb-4">
              Live analytics dashboard to monitor cost and performance
            </h3>
            <p className="font-figtree text-base text-neutral-400">
              Track every metric that matters: call volume, resolution rates, cost savings, and customer satisfaction in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

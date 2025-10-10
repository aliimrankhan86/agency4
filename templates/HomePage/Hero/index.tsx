"use client";

import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
import ConsultationButton from "@/components/ConsultationButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate", {
        autoAlpha: 0,
        scale: 0.96,
        duration: 1.2,
        stagger: 0.25,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/agency4-animation.webm" type="video/webm" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-56 pb-24 z-10 lg:pt-80">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="animate mt-4 px-2 font-onest text-white font-medium text-5xl text-center leading-[1.2] md:text-8xl">
            Smarter Voice. Real Automation.
          </div>
          <div className="animate mt-6 px-2 font-figtree text-lg text-white text-center max-w-3xl">
            AI voice agents and automations that talk, act, and deliver results.
          </div>
          <div className="animate mt-6 px-2 font-figtree text-lg text-white text-center max-w-3xl">
            Stop losing opportunities to unanswered calls and repetitive tasks. Our AI agents handle conversations, bookings, and follow-ups, all with a natural, human tone that builds trust and delivers measurable outcomes.
          </div>
          <div className="mt-8 w-full flex items-center justify-center">
            <div className="animate w-full lg:w-auto">
              <ConsultationButton primary className="w-full">
                Book a Demo
              </ConsultationButton>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-12 lg:flex-row lg:mt-48">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-flow-col-dense">
            <div className="animate text-center border-r px-6 border-white/12 lg:text-left lg:px-8">
              <div className="font-onest text-2xl font-medium text-white">
                40% Cost Savings
              </div>
              <div className="mt-2 font-figtree text-sm text-white">On average per client</div>
            </div>

            <div className="animate text-center px-6 lg:text-left lg:px-8">
              <div className="font-onest text-2xl font-medium text-white">
                24/7 Availability
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                Never miss a customer
              </div>
            </div>

            <div className="animate col-span-2 text-center border-t pt-6 border-white/12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8 lg:text-left">
              <div className="font-onest text-2xl font-medium text-white">
                3x Faster Response
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                Instant customer support
              </div>
            </div>
          </div>

          <div className="animate font-figtree text-center text-base text-white max-w-sm lg:text-left">
            Join hundreds of businesses already transforming their operations with AI-powered automation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

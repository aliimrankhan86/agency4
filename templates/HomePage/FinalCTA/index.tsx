"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ConsultationButton from "@/components/ConsultationButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FinalCTA = () => {
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
      ref={container}
      className="overflow-hidden bg-neutral-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-white lg:text-7xl">
            Ready to Let Your Business Speak for Itself?
          </h1>
          <p className="animate mt-6 font-figtree text-lg text-neutral-300">
            Book a 15-minute demo and experience your first AI call live. See real savings and measurable results within 30 days.
          </p>
          <div className="animate mt-10">
            <ConsultationButton primary className="w-full sm:w-auto">
              Book a Demo
            </ConsultationButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;


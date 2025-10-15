"use client";

import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Highlights = () => {
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
    <section ref={container} className="overflow-hidden bg-white" aria-labelledby="solution-heading">
      <div className="bg-neutral-100 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="py-12 px-6 lg:py-32 lg:px-32">
          <h2 id="solution-heading" className="animate mt-4 font-onest text-4xl leading-[1.2] text-neutral-950 font-medium lg:text-5xl">
            Meet Your Intelligent Voice Automation Partner
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-500">
            Agency4.ai creates voice and chat agents that sound human, understand intent, and act instantly. Whether booking appointments, following up with leads, or updating your CRM, our AI agents manage each step seamlessly.
          </p>
          <p className="animate mt-4 font-figtree text-lg text-neutral-500">
            Think of it as your most reliable employee, available 24/7, never distracted, always delivering.
          </p>
        </div>

        <div className="animate relative w-full h-96 lg:h-[700px]">
          <Image
            src="/images/Blue-AI-future.png"
            alt="AI voice automation technology illustration showing intelligent voice agents and automated workflows"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;

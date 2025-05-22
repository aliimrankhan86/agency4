"use client";

import Button from "@/components/Button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Showcase = () => {
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
      className="relative overflow-hidden h-[800px] bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative h-full flex items-end">
        <div className="w-full grid grid-cols-1 items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-32 lg:gap-24">
          <div>
            <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
              SHOWCASE
            </div>
            <h1 className="animate max-w-xl mt-4 font-onest text-5xl font-medium leading-[1.2] text-white lg:text-7xl">
              Experience the Future in Motion
            </h1>
          </div>

          <div>
            <p className="animate font-figtree text-base text-white">
              See how electric driving redefines performance, design, and
              sustainability. From concept to street-ready, explore real-world
              moments, stunning details, and breakthrough innovation—all in one
              place.
            </p>

            <div className="mt-8 flex gap-x-2">
              <Button as="link" href="/vehicles" className="animate" primary>
                Explore Vehicles
              </Button>
              <Button
                as="link"
                href="/contact"
                className="animate text-white border-white/12 hover:border-white"
                stroke
              >
                Book a Test Drive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

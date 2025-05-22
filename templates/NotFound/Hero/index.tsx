"use client";

import Button from "@/components/Button";
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
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/not-found.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-56 pb-24 z-10 lg:pt-80">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
            ERROR
          </div>
          <div className="animate mt-6 px-2 font-onest text-white font-medium text-8xl leading-none lg:text-[220px]">
            404
          </div>

          <div className="animate mt-6 font-onest font-medium text-3xl text-white lg:text-5xl">
            Oops! Page Not Found
          </div>

          <div className="animate mt-4 max-w-lg font-figtree text-base text-white">
            We couldn't find the page you were looking for. But don't worry—our
            journey is just getting started!
          </div>
          <div className="animate mt-8 w-full lg:w-auto">
            <Button as="link" href="/" primary className="w-full">
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

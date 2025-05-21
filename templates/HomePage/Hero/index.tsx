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
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-56 pb-24 z-10 lg:pt-80">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
            DRIVE THE FUTURE TODAY
          </div>
          <div className="animate mt-4 px-2 font-onest text-white font-medium text-5xl text-center leading-[1.2] md:text-8xl">
            Experience the Quiet Revolution
          </div>
          <div className="mt-8 w-full flex items-center justify-center flex-col gap-x-4 gap-y-4 lg:flex-row">
            <div className="animate w-full lg:w-auto">
              <Button primary className="w-full">
                Explore Vehicles
              </Button>
            </div>

            <div className="animate w-full lg:w-auto">
              <Button
                stroke
                className="w-full text-white border-white/12 hover:border-white"
              >
                Book a Test Drive
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-12 lg:flex-row lg:mt-48">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-flow-col-dense">
            <div className="animate text-center border-r px-6 border-white/12 lg:text-left lg:px-8">
              <div className="font-onest text-2xl font-medium text-white">
                370 miles
              </div>
              <div className="mt-2 font-figtree text-sm text-white">Range</div>
            </div>

            <div className="animate text-center px-6 lg:text-left lg:px-8">
              <div className="font-onest text-2xl font-medium text-white">
                155 mph
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                Top Speed
              </div>
            </div>

            <div className="animate col-span-2 text-center border-t pt-6 border-white/12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8 lg:text-left">
              <div className="font-onest text-2xl font-medium text-white">
                3.2 seconds
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                0-60 mph
              </div>
            </div>
          </div>

          <div className="animate font-figtree text-center text-base text-white max-w-sm lg:text-left">
            Experience the next generation of driving—lightning-fast
            acceleration, zero emissions, and technology that thinks ahead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

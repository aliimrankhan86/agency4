"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { highlights } from "@/mocks/highlights";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
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
    <div ref={container} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="animate relative w-full h-96 lg:h-[700px]">
            <Image
              src="/images/intro.webp"
              alt="About Image"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
              INTRODUCTION
            </div>
            <h1 className="animate mt-4 font-onest text-5xl font-medium text-neutral-950 lg:text-7xl">
              0 Emissions, 100% Thrill
            </h1>

            <p className="animate mt-12 font-figtree text-lg text-neutral-500 lg:mt-auto">
              Feel the instant torque, razor-sharp handling, and silent
              acceleration—without leaving a carbon footprint. This is pure
              driving excitement, electrified.
            </p>

            <div className="animate mt-8">
              <Button secondary icon="arrow-right">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-3 lg:mt-24">
          {highlights.map((item) => (
            <div key={item.title} className="animate relative">
              <dt className="font-figtree text-xs text-neutral-500 uppercase">
                {item.label}
              </dt>
              <dt className="mt-2 font-onest text-2xl font-medium text-neutral-950">
                {item.title}
              </dt>

              <hr className="my-6 border-t border-neutral-200" />

              <dd className="font-figtree text-base text-neutral-500">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;

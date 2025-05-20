"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { statements } from "@/mocks/statements";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Vision = () => {
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            OUR VALUES
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Driven by Progress, Powered by Purpose
          </h1>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:mt-20 lg:flex-row">
          <div className="animate relative w-full h-96 lg:flex-2">
            <Image
              src="/images/driving.webp"
              alt="Driving Image"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="animate relative w-full h-96 lg:flex-1">
            <Image
              src="/images/precision-handling.webp"
              alt="Precision Handling Image"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-x-20 gap-y-20 lg:grid-cols-3 lg:mt-20">
          {statements.map((item) => (
            <div key={item.title} className="animate">
              <div className="h-px w-full bg-neutral-200 mb-6" />

              <div className="font-figtree text-xs text-neutral-500 uppercase">
                {item.label}
              </div>
              <dt className="mt-2 font-onest font-medium text-neutral-950 text-2xl">
                {item.title}
              </dt>

              <dd className="mt-6 font-figtree text-base text-neutral-500">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Vision;

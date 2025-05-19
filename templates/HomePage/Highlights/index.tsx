"use client";

import Button from "@/components/Button";
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
    <div ref={container} className="overflow-hidden bg-white">
      <div className="bg-neutral-100 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="py-12 px-6 lg:py-32 lg:px-32">
          <span className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            01 — 03
          </span>
          <h2 className="animate mt-4 font-onest text-4xl text-neutral-950 font-medium lg:text-5xl">
            Ultra-Fast Charging
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-500">
            Recharge up to 80% in just 20 minutes. Our advanced battery system
            is built for speed, safety, and long-range confidence—perfect for
            daily drives or long journeys.
          </p>
          <div className="animate mt-6">
            <Button stroke>Learn More</Button>
          </div>
        </div>

        <div className="animate relative w-full h-96 lg:h-[700px]">
          <Image
            src="/images/ultra-fast-charging.webp"
            alt="Ultra fast charging"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <div className="bg-neutral-900 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="animate order-2 relative w-full h-96 lg:h-[700px] lg:order-1">
          <Image
            src="/images/precision-handling.webp"
            alt="Ultra fast charging"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="order-1 py-12 px-6 lg:py-32 lg:px-32 lg:order-2">
          <span className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
            02 — 03
          </span>
          <h2 className="animate mt-4 font-onest text-4xl text-white font-medium lg:text-5xl">
            Precision Handling
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-400">
            A low center of gravity and adaptive suspension deliver razor-sharp
            control and a smooth, balanced ride in any environment—city,
            highway, or winding roads.
          </p>
          <div className="animate mt-6">
            <Button primary>Learn More</Button>
          </div>
        </div>
      </div>

      <div className="bg-lime-300 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="py-12 px-6 lg:py-32 lg:px-32">
          <span className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            03 — 03
          </span>
          <h2 className="animate mt-4 font-onest text-4xl text-neutral-950 font-medium lg:text-5xl">
            Driver Assist AI
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-900">
            Real-time sensors and intelligent software enhance safety with
            features like adaptive cruise control, auto lane assist, and
            predictive collision response.
          </p>
          <div className="animate mt-6">
            <Button secondary>Learn More</Button>
          </div>
        </div>

        <div className="animate relative w-full h-96 lg:h-[700px]">
          <Image
            src="/images/driver-assist-ai.webp"
            alt="Ultra fast charging"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;

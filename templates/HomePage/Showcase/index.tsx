"use client";

import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
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
    <div ref={container} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Measured Results That Speak for Themselves
          </h1>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 lg:mt-20 lg:grid-cols-3">
          <div className="animate text-center">
            <dt className="font-onest text-5xl font-medium text-neutral-950">
              70%
            </dt>
            <dd className="mt-4 font-figtree text-base text-neutral-500">
              Reduction in call handling costs
            </dd>
          </div>

          <div className="animate text-center">
            <dt className="font-onest text-5xl font-medium text-neutral-950">
              5×
            </dt>
            <dd className="mt-4 font-figtree text-base text-neutral-500">
              Faster response times
            </dd>
          </div>

          <div className="animate text-center">
            <dt className="font-onest text-5xl font-medium text-neutral-950">
              75%
            </dt>
            <dd className="mt-4 font-figtree text-base text-neutral-500">
              Of enquiries resolved without a human agent
            </dd>
          </div>

          <div className="animate text-center">
            <dt className="font-onest text-5xl font-medium text-neutral-950">
              3×
            </dt>
            <dd className="mt-4 font-figtree text-base text-neutral-500">
              Improvement in lead conversion
            </dd>
          </div>

          <div className="animate text-center">
            <dt className="font-onest text-5xl font-medium text-neutral-950">
              +30%
            </dt>
            <dd className="mt-4 font-figtree text-base text-neutral-500">
              Increase in customer satisfaction
            </dd>
          </div>

          <div className="animate text-center flex items-center justify-center">
            <p className="font-figtree text-lg text-neutral-500 max-w-sm">
              Automation isn't just efficiency, it's transformation.
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Showcase;

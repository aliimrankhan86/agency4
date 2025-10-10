"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Icon from "@/components/Icon";
import { values } from "@/mocks/values";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Values = () => {
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
      className="overflow-hidden bg-neutral-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            OUR VALUES
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            More Than a Car — It’s a Commitment
          </h1>
          <p className="animate mt-4 font-figtree text-lg text-neutral-500">
            Everything we build, we build with purpose—driven by innovation,
            responsibility, and the road ahead.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="animate p-10 bg-neutral-900">
              <Icon name={item.icon} size={48} className="fill-blue-500" />

              <dt className="mt-20 font-onest text-2xl font-medium text-white">
                {item.title}
              </dt>
              <dd className="mt-4 font-figtree text-base text-neutral-400">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Values;

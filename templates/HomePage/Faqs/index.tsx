"use client";

import { useState, useRef } from "react";
import Icon from "@/components/Icon";
import { faqs } from "@/mocks/faqs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            FAQ’S
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Got questions? We’ve got answers
          </h1>
        </div>

        <div className="mt-20 mx-auto max-w-2xl">
          <div className="flex flex-col divide-y divide-neutral-200">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className={`animate flex flex-col ${index !== 0 ? "pt-8" : ""} ${index !== faqs.length - 1 ? "pb-8" : ""}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-6"
                >
                  <div className="font-onest font-medium text-xl text-neutral-950 text-left">
                    {item.question}
                  </div>

                  <Icon
                    name="close"
                    color="fill-black"
                    className={`shrink-0 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-0" : "-rotate-45"
                    }`}
                  />
                </button>

                {activeIndex === index && (
                  <p className="mt-4 font-figtree text-base text-neutral-500 transition-opacity duration-300">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

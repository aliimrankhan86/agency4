"use client";

import { useState, useRef } from "react";
import Icon from "@/components/Icon";
import { faqs } from "@/mocks/faqs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { brands } from "@/mocks/brands";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FaqItem = {
  question: string;
  answer: string;
};

type FaqsProps = {
  className?: string;
  section: {
    title: string;
    items: FaqItem[];
  };
};

const Faqs = ({ className, section }: FaqsProps) => {
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
      className={`overflow-hidden bg-neutral-100 py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            FAQ’S
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            {section.title}
          </h1>
        </div>

        <div className="mt-20 mx-auto max-w-2xl">
          <div className="flex flex-col divide-y divide-neutral-200">
            {section.items.map((item, index) => (
              <div
                key={item.question}
                className={`animate flex flex-col ${index !== 0 ? "pt-8" : ""} ${index !== section.items.length - 1 ? "pb-8" : ""}`}
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

        {section.title === "Ownership & Support" && (
          <div className="mt-12 mx-auto max-w-4xl flex flex-col justify-center text-center lg:mt-20">
            <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
              TRUSTED BY FORWARD-THINKING COMPANIES
            </div>

            <Marquee className="mt-12" gradient gradientColor="white" autoFill>
              {brands.map((item) => (
                <div className="animate mr-20 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 ease-in-out">
                  {item}
                </div>
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;

"use client";

import { news } from "@/mocks/news";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const News = () => {
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
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
          LATEST NEWS
        </div>
        <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
          Innovation in Motion
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-3">
          {news.map((item) => (
            <div key={item.title} className="animate">
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt="About Image"
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  {item.time}
                </div>
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  •
                </div>
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  {item.date}
                </div>
              </div>

              <h6 className="mt-4 font-onest text-2xl font-medium text-neutral-950">
                {item.title}
              </h6>
              <p className="mt-2 font-figtree text-base text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

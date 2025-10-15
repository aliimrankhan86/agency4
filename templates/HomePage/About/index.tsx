"use client";

import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
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
    <section ref={container} className="overflow-hidden bg-white py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div 
            className="animate relative w-full h-[300px] lg:h-auto lg:min-h-[420px] bg-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/voicecake-img.png')" }}
            role="img"
            aria-label="Business communication challenges illustration"
          />

          <div className="flex flex-col items-start lg:py-5">
            <h2 id="problem-heading" className="animate mt-4 font-onest text-4xl font-medium leading-tight text-neutral-950 lg:text-6xl">
              The Modern Business Bottleneck
            </h2>

            <p className="animate mt-5 font-figtree text-lg text-neutral-500">
              Most businesses are overwhelmed by calls, enquiries, and manual admin that eat into productive hours.
            </p>

          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-3 lg:mt-24" role="list" aria-label="Business challenges">
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
    </section>
  );
};

export default About;

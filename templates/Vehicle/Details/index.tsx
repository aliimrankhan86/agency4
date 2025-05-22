"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vehicle from "@/components/Vehicle";
import { Vehicle as VehicleType } from "@/types/vehicle";
import { vehicle_highlights } from "@/mocks/vehicle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type DetailsProps = {
  vehicle: VehicleType;
};

const Details = ({ vehicle }: DetailsProps) => {
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
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            TECH & FEATURES
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Technology That Drives You
          </h1>
        </div>

        <div className="mt-12 flex flex-col gap-y-8 lg:mt-20">
          <Vehicle vehicle={vehicle} detailPage={true} />
        </div>

        <div className="mt-12 flex flex-col justify-between gap-12 lg:mt-20 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="animate font-onest font-medium text-2xl text-neutral-950">
              Dual-motor power, adaptive dynamics, and zero-emission performance
              come together to deliver lightning-fast acceleration and seamless
              connectivity, elevating every drive and redefining the electric
              experience.
            </div>
            <div className="animate mt-6 font-figtree text-base text-neutral-500">
              With explosive acceleration, razor-sharp handling, and advanced
              driver intelligence, Velocity X turns every drive into an
              experience. It’s performance you can feel—without the carbon
              footprint.
            </div>
          </div>

          <div>
            <div className="animate font-figtree uppercase text-sm text-neutral-500">
              STARTS FROM
            </div>
            <div className="animate mt-4 font-onest font-medium text-5xl text-neutral-950 lg:text-7xl">
              $68,000
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 divide-y divide-neutral-200">
          {vehicle_highlights.map((section, index) => (
            <div
              key={`section-${index}`}
              className="py-16 first:pt-0 last:pb-0"
            >
              <div className="animate font-onest font-medium text-2xl text-neutral-950">
                {section.title}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-4">
                {section.items.map((item) => (
                  <div key={item.name} className="animate">
                    <div className="font-figtree text-base text-neutral-500">
                      {item.label}
                    </div>
                    <div className="mt-4 font-onest font-medium text-xl text-neutral-950">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Icon from "@/components/Icon";
import ConsultationButton from "@/components/ConsultationButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Packages = () => {
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

  const packages = [
    {
      tier: "Launch",
      subtitle: "Start Smart",
      monthly: "£299–£499",
      setup: "£500",
      features: [
        "1 AI voice agent (inbound or chat)",
        "1 simple workflow (lead capture or booking)",
        "1 system integration (CRM or database)",
        "500 monthly minutes",
        "Monthly performance report",
      ],
    },
    {
      tier: "Growth",
      subtitle: "Scale Fast",
      monthly: "£999–£1,499",
      setup: "£1,000",
      featured: true,
      features: [
        "Up to 3 agents (voice + chat)",
        "5 custom workflows",
        "CRM, WhatsApp, Email integrations",
        "2,000 monthly minutes",
        "Monthly analytics review",
      ],
    },
    {
      tier: "Enterprise",
      subtitle: "Operate Smart",
      monthly: "from £3,500",
      setup: "£1,500",
      features: [
        "Unlimited agents and workflows",
        "Dedicated account manager with SLA",
        "Custom voices and analytics dashboards",
        "White-label capability",
      ],
    },
  ];

  return (
    <div
      id="packages"
      ref={container}
      className="overflow-hidden bg-neutral-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-white lg:text-7xl">
            Three Flexible Plans for Every Business Size
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`animate p-10 ${
                pkg.featured
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-800 text-white"
              }`}
            >
              <div className="mb-2">
                <div className="font-onest font-medium text-2xl text-white">
                  {pkg.tier}
                </div>
                <div
                  className={`font-figtree text-sm ${
                    pkg.featured ? "text-blue-100" : "text-neutral-400"
                  } uppercase`}
                >
                  {pkg.subtitle}
                </div>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <div className="font-onest font-medium text-4xl text-white">
                  {pkg.monthly}
                </div>
                <div
                  className={`font-figtree text-sm ${
                    pkg.featured ? "text-blue-100" : "text-neutral-400"
                  }`}
                >
                  / MONTH
                </div>
              </div>

              <div
                className={`mt-4 font-figtree text-base ${
                  pkg.featured ? "text-blue-100" : "text-neutral-400"
                }`}
              >
                Setup: {pkg.setup}
              </div>

              <div
                className={`mt-8 w-full h-px ${
                  pkg.featured ? "bg-blue-400" : "bg-neutral-700"
                }`}
              />

              <div className="mt-8 font-figtree text-sm text-white uppercase">
                Includes:
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      className={`flex-shrink-0 ${
                        pkg.featured ? "text-blue-100" : "text-blue-500"
                      }`}
                      size={20}
                    />
                    <div
                      className={`font-figtree text-sm ${
                        pkg.featured ? "text-blue-100" : "text-neutral-300"
                      }`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ConsultationButton
                  primary={true}
                  className="w-full"
                >
                  Book a Demo
                </ConsultationButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;


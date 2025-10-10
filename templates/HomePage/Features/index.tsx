"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
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
        <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
          Inbound. Outbound. Automation. Analytics.
        </h1>
        <p className="animate mt-4 max-w-3xl font-figtree text-lg text-neutral-500">
          Complete voice automation solutions that handle every aspect of customer communication and business operations.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          <div className="animate bg-white p-8 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              INBOUND AGENTS
            </div>
            <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
              Answer calls, handle queries, route intelligently
            </h3>
            <p className="font-figtree text-base text-neutral-600 mb-3">
              What It Does: Professional AI agents answer every incoming call, understand customer needs, and provide accurate responses or seamlessly transfer to the right person.
            </p>
            <p className="font-figtree text-sm text-neutral-500">
              Example: Customer support, booking lines
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              OUTBOUND AGENTS
            </div>
            <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
              Proactively call customers or leads
            </h3>
            <p className="font-figtree text-base text-neutral-600 mb-3">
              What It Does: AI agents reach out to your customers automatically for reminders, follow-ups, surveys, and engagement campaigns.
            </p>
            <p className="font-figtree text-sm text-neutral-500">
              Example: Appointment reminders, feedback calls
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              AUTOMATIONS
            </div>
            <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
              Turn voice interactions into real actions
            </h3>
            <p className="font-figtree text-base text-neutral-600 mb-3">
              What It Does: Every conversation triggers automated workflows that update systems, send confirmations, and execute business logic without manual intervention.
            </p>
            <p className="font-figtree text-sm text-neutral-500">
              Example: CRM updates, email confirmations
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
              ANALYTICS
            </div>
            <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
              Track performance and ROI
            </h3>
            <p className="font-figtree text-base text-neutral-600 mb-3">
              What It Does: Comprehensive dashboards show exactly how your AI agents perform, where they save costs, and how they drive revenue.
            </p>
            <p className="font-figtree text-sm text-neutral-500">
              Example: Response rates, cost reduction, satisfaction metrics
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;

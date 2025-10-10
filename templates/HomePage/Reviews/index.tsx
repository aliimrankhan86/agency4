"use client";

import Icon from "@/components/Icon";
import { reviews } from "@/mocks/reviews";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ticker from "@/components/Ticker";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ReviewsProps = {
  className?: string;
  cardBackground?: string;
  gradientColor?: string;
};

const Reviews = ({
  className,
  cardBackground = "bg-white",
  gradientColor = "#F5F5F5",
}: ReviewsProps) => {
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
      id="testimonials"
      ref={container}
      className={`bg-neutral-100 overflow-hidden py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Why Businesses Trust Agency4.ai
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          <div className="animate bg-white p-8 rounded-2xl">
            <Icon name="microphone" className="text-neutral-950 mb-4" size={32} />
            <h3 className="font-onest text-xl font-medium text-neutral-950 mb-3">
              Human-sounding conversations, not robotic IVRs
            </h3>
            <p className="font-figtree text-base text-neutral-600">
              Our AI voices are indistinguishable from real people, creating authentic connections that customers appreciate.
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <Icon name="flow-arrow" className="text-neutral-950 mb-4" size={32} />
            <h3 className="font-onest text-xl font-medium text-neutral-950 mb-3">
              End-to-end automation from call to CRM
            </h3>
            <p className="font-figtree text-base text-neutral-600">
              Every interaction triggers the right actions, updates, and follow-ups automatically across your entire tech stack.
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <Icon name="shield-check" className="text-neutral-950 mb-4" size={32} />
            <h3 className="font-onest text-xl font-medium text-neutral-950 mb-3">
              Secure, compliant, and auditable processes
            </h3>
            <p className="font-figtree text-base text-neutral-600">
              Enterprise-grade security with full compliance to GDPR, SOC 2, and industry regulations.
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl">
            <Icon name="chart-line" className="text-neutral-950 mb-4" size={32} />
            <h3 className="font-onest text-xl font-medium text-neutral-950 mb-3">
              Transparent ROI, measurable from month one
            </h3>
            <p className="font-figtree text-base text-neutral-600">
              Track exactly how much time and money you save with detailed analytics and performance metrics.
            </p>
          </div>

          <div className="animate bg-white p-8 rounded-2xl lg:col-span-2">
            <Icon name="handshake" className="text-neutral-950 mb-4" size={32} />
            <h3 className="font-onest text-xl font-medium text-neutral-950 mb-3">
              A true strategic partner, not just another software provider
            </h3>
            <p className="font-figtree text-base text-neutral-600">
              We work alongside your team to understand your unique challenges and build solutions that truly fit your business.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="animate bg-neutral-900 p-10 rounded-2xl lg:p-16">
            <div className="font-figtree text-xs text-lime-300 uppercase tracking-wide mb-4">
              CASE STUDY
            </div>
            <h2 className="font-onest text-3xl font-medium text-white mb-6 lg:text-4xl">
              Clinic Automation Story
            </h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  Before
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  2 receptionists managed over 100 daily calls manually.
                </p>
              </div>
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  After
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  1 AI agent handled 80% of calls automatically.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-8">
              <div className="font-figtree text-sm text-lime-300 uppercase mb-6">
                Results (30 days)
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div>
                  <div className="font-onest text-3xl font-medium text-white">75%</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Containment rate</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">£1,200</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Monthly savings</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">2×</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">More bookings confirmed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="animate bg-neutral-900 p-10 rounded-2xl lg:p-16">
            <div className="font-figtree text-xs text-lime-300 uppercase tracking-wide mb-4">
              CASE STUDY
            </div>
            <h2 className="font-onest text-3xl font-medium text-white mb-6 lg:text-4xl">
              Finance Verification Automation
            </h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  Before
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  Operations team performed manual KYC checks and payment reminders, creating backlogs and delays.
                </p>
              </div>
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  After
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  An AI voice agent verifies documents, completes KYC steps, and triggers reminders automatically.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-8">
              <div className="font-figtree text-sm text-lime-300 uppercase mb-6">
                Results (30 days)
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div>
                  <div className="font-onest text-3xl font-medium text-white">60%</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Fewer manual verification calls</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">£3,200</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Monthly savings</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">40%</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Faster onboarding completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="animate bg-neutral-900 p-10 rounded-2xl lg:p-16">
            <div className="font-figtree text-xs text-lime-300 uppercase tracking-wide mb-4">
              CASE STUDY
            </div>
            <h2 className="font-onest text-3xl font-medium text-white mb-6 lg:text-4xl">
              Logistics Delivery Orchestration
            </h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  Before
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  Dispatch team handled delivery updates and missed-call follow-ups manually, leading to repeat enquiries.
                </p>
              </div>
              <div>
                <div className="font-figtree text-sm text-lime-300 uppercase mb-2">
                  After
                </div>
                <p className="font-figtree text-base text-neutral-300">
                  An AI voice agent sends delivery updates, manages missed-call callbacks, and records outcomes to the CRM.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-8">
              <div className="font-figtree text-sm text-lime-300 uppercase mb-6">
                Results (30 days)
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div>
                  <div className="font-onest text-3xl font-medium text-white">55%</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Drop in "Where is my order?" calls</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">£2,600</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Monthly savings</div>
                </div>
                <div>
                  <div className="font-onest text-3xl font-medium text-white">20%</div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">Improvement in on-time deliveries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="animate font-onest text-4xl font-medium leading-[1.2] text-neutral-950 lg:text-5xl">
              What Clients Are Saying
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
          {reviews.map((item) => (
            <div key={item.title} className={`animate p-10 ${cardBackground}`}>
              <div className="flex flex-col divide-y divide-neutral-200">
                <div className="pb-8 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => {
                      const filled = index < Math.floor(Number(item.rating));
                      return (
                        <Icon
                          key={index}
                          name="star"
                          weight="fill"
                          className={
                            filled ? "fill-yellow-300" : "fill-neutral-200"
                          }
                          size={18}
                        />
                      );
                    })}
                  </div>

                  <div className="font-figtree text-sm text-neutral-500 uppercase">
                    {item.date}
                  </div>
                </div>

                <div className="py-8">
                  <h6 className="font-onest text-2xl font-medium text-neutral-950">
                    {item.title}
                  </h6>

                  <p className="mt-4 font-figtree text-base text-neutral-500">
                    {item.review}
                  </p>
                </div>

                <div className="pt-8">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={item.reviewer_image}
                      alt="About Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4 font-figtree text-base font-medium text-neutral-950">
                    {item.reviewer}
                  </div>
                  <div className="mt-1 font-figtree text-sm text-neutral-500">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl flex flex-col justify-center text-center lg:mt-20">

          <Ticker gradientColor={gradientColor} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

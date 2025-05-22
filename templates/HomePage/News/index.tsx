"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Article from "@/components/Article";
import { Article as ArticleType } from "@/types/article";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type NewsProps = {
  news: ArticleType[];
};

const News = ({ news }: NewsProps) => {
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
            <Article key={item.title} item={item} className="animate" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

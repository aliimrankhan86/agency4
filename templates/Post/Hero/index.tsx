"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Article as ArticleType } from "@/types/article";

type HeroProps = {
  article: ArticleType;
};

const Hero = ({ article }: HeroProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate", {
        autoAlpha: 0,
        scale: 0.96,
        duration: 1.2,
        stagger: 0.25,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative overflow-hidden bg-white pt-52 pb-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${article.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 mx-auto px-6 h-full flex flex-col justify-end items-center max-w-7xl">
        <div className="flex items-center gap-x-4">
          <Link
            href="/"
            className="animate font-figtree font-medium text-sm tracking-[.12em] uppercase text-white"
          >
            {article.time}
          </Link>
          <div className="animate text-blue-500">
            <Icon name="dot-outline" weight="fill" />
          </div>
          <div className="animate font-figtree font-medium text-sm tracking-[.12em] uppercase text-white">
            {article.date}
          </div>
        </div>

        <div className="mt-4 animate font-onest text-white font-medium text-5xl text-center leading-[1.2] md:text-8xl">
          {article.title}
        </div>
        <div className="mt-4 animate font-figtree text-base text-white max-w-lg text-center">
          {article.description}
        </div>
      </div>
    </div>
  );
};

export default Hero;

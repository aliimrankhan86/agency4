"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import TextArea from "@/components/TextArea";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactForm = () => {
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="animate relative w-full h-96 lg:h-full">
            <Image
              src="/images/contact-form.jpg"
              alt="About Image"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="flex flex-col">
            <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
              CONTACT US
            </div>
            <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
              Get In Touch
            </h1>

            <div className="animate mt-12 w-full h-px bg-neutral-200" />

            <div className="mt-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="animate">
                <div className="font-figtree text-base text-neutral-500">
                  Address
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-figtree text-sm font-medium uppercase text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 transition-all duration-200"
                >
                  VIEW ON MAPS
                </a>
              </div>
              <div className="animate">
                <div className="font-figtree text-base text-neutral-500">
                  Phone Number
                </div>
                <a
                  href="tel:+14155550199"
                  className="mt-4 inline-block font-figtree text-sm font-medium uppercase text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 transition-all duration-200"
                >
                  +1 (415) 555-0199
                </a>
              </div>
              <div className="animate">
                <div className="font-figtree text-base text-neutral-500">
                  Email Address
                </div>
                <a
                  href="mailto:hello@voltz.com"
                  className="mt-4 inline-block font-figtree text-sm font-medium uppercase text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 transition-all duration-200"
                >
                  HELLO@VOLTZ.COM
                </a>
              </div>
            </div>

            <div className="animate mt-12 w-full h-px bg-neutral-200" />

            <p className="animate mt-12 font-onest text-2xl text-neutral-950">
              Send Us a Message
            </p>

            <form className="mt-12 flex flex-col gap-6">
              <div className="flex flex-col items-center gap-x-4 gap-y-6 lg:flex-row">
                <TextField
                  label="FIRST NAME"
                  placeholder="Jordan"
                  className="animate"
                />
                <TextField
                  label="LAST NAME"
                  placeholder="Smith"
                  className="animate"
                />
              </div>
              <div className="flex flex-col items-center gap-x-4 gap-y-6 lg:flex-row">
                <TextField
                  label="PHONE"
                  placeholder="+1 555 123 4567"
                  className="animate"
                />
                <TextField
                  label="EMAIL"
                  placeholder="jordan@example.com"
                  className="animate"
                />
              </div>

              <TextArea
                label="MESSAGE"
                placeholder="Type your message here..."
                className="animate"
              />
            </form>

            <div className="animate mt-8">
              <Button primary icon="arrow-right" className="w-full">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

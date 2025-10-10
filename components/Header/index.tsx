"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import Button from "../Button";
import Icon from "../Icon";
import Link from "next/link";
import Logo from "../Logo";
import { useLoginGate } from "@/contexts/LoginGateContext";

const all_pages = [
  { name: "Faq's", href: "/faqs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Reviews", href: "/reviews" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/news" },
  { name: "Single Post", href: "/news/why-sustainability" },
  { name: "404 Page", href: "/404" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLoginPrompt } = useLoginGate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle deep linking with hash on page load
    const hash = window.location.hash;
    if (hash && ['#use-cases', '#packages', '#testimonials', '#faq', '#contact'].includes(hash)) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleLoginGatedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openLoginPrompt();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/12 transition-all duration-300 ${
        scrolled && !mobileMenuOpen
          ? "backdrop-blur-md bg-black/60 shadow-md"
          : "backdrop-blur-md bg-black/40"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-12 p-6 lg:px-8"
      >
        <Logo mobileMenuOpen={mobileMenuOpen} />

        <div className="hidden lg:block w-px h-12 bg-white/12" />

        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-pressed={mobileMenuOpen}
            aria-label="Toggle menu"
            className="group relative w-10 h-10 flex items-center justify-center transition"
          >
            <span
              className={`absolute h-[2px] w-6 rounded transition-transform duration-300 ease-in-out
                    ${mobileMenuOpen ? "rotate-45 translate-y-0 bg-black" : "-translate-y-1 bg-white"}
                  `}
            />
            <span
              className={`absolute h-[2px] w-6 rounded transition-transform duration-300 ease-in-out
                    ${mobileMenuOpen ? "-rotate-45 translate-y-0 bg-black" : "translate-y-1 bg-white"}
                  `}
            />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-12">
          <button
            onClick={() => scrollToSection('use-cases')}
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            Use Cases
          </button>

          <button
            onClick={() => scrollToSection('packages')}
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            Packages
          </button>

          <button
            onClick={() => scrollToSection('testimonials')}
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            Testimonials
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            Contact
          </button>

          <button
            onClick={() => scrollToSection('faq')}
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            FAQ
          </button>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Button
                className="fill-white border-blue-500 text-white hover:border-blue-600"
                onClick={handleLoginGatedClick}
                icon="arrow-up-right"
                primary
              >
                Sign in
              </Button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />

        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-pressed={mobileMenuOpen}
              aria-label="Toggle menu"
              className="group relative w-10 h-10"
            ></button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10">
              <div className="space-y-2 py-6">
                <button
                  onClick={() => scrollToSection('use-cases')}
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                >
                  Use Cases
                </button>

                <button
                  onClick={() => scrollToSection('packages')}
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                >
                  Packages
                </button>

                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                >
                  Testimonials
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                >
                  Contact
                </button>

                <button
                  onClick={() => scrollToSection('faq')}
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                >
                  FAQ
                </button>
              </div>

              <div className="py-6">
                  <button
                    onClick={handleLoginGatedClick}
                    className="block py-2 font-figtree font-semibold text-lg text-neutral-900 w-full text-left"
                  >
                    Sign in
                  </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;

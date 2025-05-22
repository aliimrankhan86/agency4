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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/12 transition-all duration-300 ${
        scrolled && !mobileMenuOpen
          ? "backdrop-blur-md bg-black/60 shadow-md"
          : "bg-transparent"
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
          <Link
            href="/about"
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            About
          </Link>

          <Popover className="relative">
            <PopoverButton className="focus:outline-none flex items-center gap-x-2 font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity">
              Vehicles
              <Icon aria-hidden="true" name="caret-down" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-2xs overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                <Link
                  href="/vehicles"
                  className="block gap-x-6 rounded-lg p-4 font-figtree text-sm font-medium text-gray-900 hover:bg-neutral-100 transition-colors"
                >
                  Vehicles
                </Link>

                <Link
                  href="/vehicles/2025-ioniq-5"
                  className="block gap-x-6 rounded-lg p-4 font-figtree text-sm font-medium text-gray-900 hover:bg-neutral-100 transition-colors"
                >
                  Vehicle Details
                </Link>
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="focus:outline-none flex items-center gap-x-2 font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity">
              All Pages
              <Icon aria-hidden="true" name="caret-down" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-2xs overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {all_pages.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block gap-x-6 rounded-lg p-4 font-figtree text-sm font-medium text-gray-900 hover:bg-neutral-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/news"
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            News
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            className="fill-white border-white/12 text-white hover:border-white"
            as="link"
            href="/contact"
            icon="arrow-up-right"
            stroke
          >
            Get In Touch
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
                <Link
                  href="/about"
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900"
                >
                  About
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-lg font-figtree font-semibold text-neutral-900 hover:bg-neutral-100">
                    Vehicles
                    <Icon
                      name="caret-down"
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    <DisclosureButton
                      as="a"
                      href="/vehicles"
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm font-figtree font-medium text-neutral-900 hover:bg-neutral-50"
                    >
                      Vehicles
                    </DisclosureButton>
                    <DisclosureButton
                      as="a"
                      href="/vehicles"
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm font-figtree font-medium text-neutral-900 hover:bg-neutral-50"
                    >
                      Vehicle Details
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-lg font-figtree font-semibold text-neutral-900 hover:bg-neutral-100">
                    All Pages
                    <Icon
                      name="caret-down"
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...all_pages].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-figtree font-medium text-neutral-900 hover:bg-neutral-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="/news"
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900"
                >
                  News
                </Link>
              </div>

              <div className="py-6">
                <Link
                  href="/contact"
                  className="block py-2 font-figtree font-semibold text-lg text-neutral-900"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;

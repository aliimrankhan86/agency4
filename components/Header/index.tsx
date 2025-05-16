"use client";

import { useState } from "react";
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

const all_pages = [
  { name: "Faq's", href: "/faqs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Reviews", href: "/reviews" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Single Post", href: "/blog/post" },
  { name: "404 Page", href: "/404" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-12 p-6 lg:px-8"
      >
        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0453 32C24.8385 32 32 24.8385 32 16.0453C32 7.16147 24.8385 0 16.0453 0C7.16147 0 0 7.16147 0 16.0453C0 24.8385 7.16147 32 16.0453 32ZM21.0312 7.52409C21.3031 6.61757 20.3966 6.16431 19.6714 6.70822L8.97451 14.323C8.15864 14.9575 8.24929 16.136 9.15581 16.136H17.4051L12.9632 17.6771L10.9688 24.6572C10.6969 25.5637 11.6034 26.017 12.3286 25.4731L23.0255 17.7677C23.8414 17.1332 23.7507 15.9547 22.8442 15.9547H18.5836L21.0312 7.52409Z"
              fill="#BBF451"
            />
          </svg>

          <span
            className={`font-onest font-semibold text-2xl ${mobileMenuOpen ? "text-neutral-950" : "text-white"}`}
          >
            Voltz
          </span>
        </Link>

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
            <PopoverButton className="flex items-center gap-x-2 font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity">
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
                  href="/vehicles/vehicle-details"
                  className="block gap-x-6 rounded-lg p-4 font-figtree text-sm font-medium text-gray-900 hover:bg-neutral-100 transition-colors"
                >
                  Vehicle Details
                </Link>
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-2 font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity">
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
            href="/contact"
            className="font-figtree font-medium text-sm text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            Contact
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button as="link" href="/contact" icon="arrow-up-right" secondary>
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

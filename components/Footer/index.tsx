import Link from "next/link";
import Button from "../Button";
import Icon from "../Icon";
import Logo from "../Logo";
import { quick_links, socials } from "@/mocks/footer";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden bg-neutral-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-32 gap-y-20 px-6 lg:px-8 lg:grid-cols-2">
          <div className="flex flex-col gap-12 lg:gap-20">
            <div>
              <Logo />
              <div className="mt-4 font-figtree text-lg text-neutral-400">
                Driving the future—one electric mile at a time.
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="max-w-xs font-onest font-medium text-2xl text-white">
                Subscribe to our newsletter for exclusive updates.
              </div>

              <div className="mt-4 group w-full max-w-md flex p-2 border border-neutral-700 rounded-full transition-all duration-300 ease-in-out hover:border-white hover:bg-neutral-800 focus-within:border-white focus-within:bg-neutral-800 active:scale-[0.98] active:border-white active:bg-neutral-700">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-4 bg-transparent font-figtree text-sm text-white placeholder:text-neutral-400 focus:outline-none"
                />
                <Button primary icon="arrow-right">
                  <span className="hidden sm:inline">Subscribe</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 flex items-center justify-center border border-neutral-700 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                >
                  <Icon name={item.name} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="font-onest font-medium text-xl text-white">
                Quick Links
              </div>

              <div className="mt-8 flex flex-col gap-y-4">
                {quick_links.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-figtree font-medium text-lg text-neutral-400 hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-onest font-medium text-xl text-white">
                Contact Us
              </div>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-4">
                  <Icon name="location" className="fill-lime-300" />
                  <div>
                    <div className="font-figtree font-medium text-base text-white">
                      Address
                    </div>
                    <div className="mt-2 font-figtree text-sm text-neutral-400">
                      1024 Aurora Blvd, San Francisco, CA 94107
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon name="phone" className="fill-lime-300" />
                  <div>
                    <div className="font-figtree font-medium text-base text-white">
                      Phone Number
                    </div>
                    <div className="mt-2 font-figtree text-sm text-neutral-400">
                      +1 (415) 555-0199
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon name="email" className="fill-lime-300" />
                  <div>
                    <div className="font-figtree font-medium text-base text-white">
                      Address
                    </div>
                    <div className="mt-2 font-figtree text-sm text-neutral-400">
                      support@voltz.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="overflow-hidden bg-neutral-900 py-8 border-t border-neutral-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-center justify-between lg:flex-row">
            <div className="font-figtree text-base text-white">
              © 2025 Capacitor Motors. All rights reserved.
            </div>

            <div className="flex items-center gap-12">
              <div className="font-figtree text-base text-white">
                Terms & Conditions
              </div>
              <div className="font-figtree text-base text-white">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

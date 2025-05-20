import Icon from "@/components/Icon";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden bg-white h-[600px] py-24 bg-cover bg-center sm:py-32"
      style={{ backgroundImage: "url('/images/about.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center max-w-4xl">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="animate font-onest text-white font-medium text-5xl text-center leading-[1.2] md:text-8xl">
            About Us
          </div>

          <div className="mt-4 flex items-center gap-x-4">
            <Link
              href="/"
              className="animate font-figtree font-medium text-sm tracking-[.12em] uppercase text-lime-300"
            >
              HOME
            </Link>
            <Icon name="arrow-right" className="lime-green-300" />
            <div className="animate font-figtree font-medium text-sm tracking-[.12em] uppercase text-lime-300">
              ABOUT US
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

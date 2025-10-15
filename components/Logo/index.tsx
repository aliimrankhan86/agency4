import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  mobileMenuOpen?: boolean;
};

const Logo = ({ mobileMenuOpen }: LogoProps) => {
  return (
    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
      <div className="relative w-8 h-8">
        <Image
          src="/images/Agency4-logo.png"
          alt="Agency4 Logo"
          fill
          sizes="32px"
          style={{ objectFit: "contain" }}
          className="brightness-0 invert"
          priority
        />
      </div>

      <span
        className={`font-onest font-semibold text-2xl ${mobileMenuOpen ? "text-neutral-950" : "text-white"}`}
      >
        Agency4
      </span>
    </Link>
  );
};

export default Logo;

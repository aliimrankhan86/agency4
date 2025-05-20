import Link from "next/link";

type LogoProps = {
  mobileMenuOpen?: boolean;
};

const Logo = ({ mobileMenuOpen }: LogoProps) => {
  return (
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
  );
};

export default Logo;

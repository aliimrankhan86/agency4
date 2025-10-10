import Link from "next/link";
import Icon from "../Icon";

type Props = {
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  stroke?: boolean;
  ghost?: boolean;
};

type ButtonProps = Props &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
    | ({ as: "link"; href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "href"
      >)
  );

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  primary,
  secondary,
  ghost,
  stroke,
  as = "button",
  ...props
}) => {
  const classes = `group inline-flex items-center justify-center border rounded-full text-base gap-4 transition-all cursor-pointer disabled:pointer-events-none ${
    primary
      ? "py-4 px-6 bg-blue-500 font-figtree text-sm font-medium text-black hover:bg-blue-600 border-0"
      : ""
  } ${
    secondary
      ? "py-4 px-6 bg-neutral-100 font-figtree text-sm font-medium text-neutral-950 border border-white/12 border-[1px] hover:bg-neutral-200 hover:text-black"
      : ""
  } ${
    stroke
      ? "py-4 px-6 bg-transparent font-figtree text-sm font-medium text-neutral-950 border border-neutral-200 border-[1px] hover:border-neutral-950"
      : ""
  } ${
    ghost
      ? "py-4 px-6 bg-transparent font-figtree text-sm font-medium text-neutral-950 border border-neutral-200 border-[1px] hover:border-neutral-950"
      : "px-6.5"
  } ${className || ""}`;

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon && <Icon className="fill-inherit" name={icon} />}
      </a>
    );
  }

  if (as === "link") {
    return (
      <Link href={(props as { href: string }).href} className={classes}>
        {children}
        {icon && <Icon className="fill-inherit" name={icon} />}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {icon && <Icon className="fill-inherit" name={icon} />}
    </button>
  );
};

export default Button;

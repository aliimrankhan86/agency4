import Link from "next/link";
import Icon from "../Icon";

type Props = {
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  isGray?: boolean;
  isCircle?: boolean;
  stroke?: boolean;
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
  isGray,
  isCircle,
  stroke,
  as = "button",
  ...props
}) => {
  const classes = `group inline-flex items-center justify-center border rounded-full text-base gap-4 transition-all cursor-pointer disabled:pointer-events-none ${
    primary
      ? "py-4 px-6 bg-lime-300 font-figtree text-sm font-medium text-black hover:bg-lime-400 border-0"
      : ""
  } ${
    secondary
      ? "py-4 px-6 bg-neutral-100 font-figtree text-sm font-medium text-neutral-950 border border-white/12 border-[1px] hover:bg-neutral-200 hover:text-black"
      : ""
  } ${
    isGray
      ? "relative bg-b-surface1 border-transparent text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary hover:shadow-depth dark:bg-shade-04"
      : ""
  } ${
    isCircle
      ? "w-12 !px-0 rounded-full after:rounded-full hover:shadow-depth"
      : "px-6.5"
  } ${
    stroke
      ? "py-4 px-6 bg-transparent font-figtree text-sm font-medium text-neutral-950 border border-neutral-200 border-[1px] hover:border-neutral-950"
      : ""
  } ${className || ""}`;

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon && (
          <Icon
            className="fill-white group-hover:fill-black transition-colors"
            name={icon}
          />
        )}
      </a>
    );
  }

  if (as === "link") {
    return (
      <Link href={(props as { href: string }).href} className={classes}>
        {children}
        {icon && (
          <Icon
            className="fill-white group-hover:fill-white transition-colors"
            name={icon}
          />
        )}
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

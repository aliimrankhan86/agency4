import {
  ArrowRight,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  ThreadsLogo,
} from "@phosphor-icons/react";

type IconsType = {
  [key: string]: React.ElementType;
};

const icons: IconsType = {
  "arrow-right": ArrowRight,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  twitter: TwitterLogo,
  threads: ThreadsLogo,
};

type IconProps = {
  className?: string;
  name: keyof typeof icons;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  color?: string;
};

const Icon = ({
  className,
  name,
  size = 24,
  weight = "regular",
  color = "currentColor",
}: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={`inline-flex size-6 ${className || ""}`}
      size={name === "chevron" ? 16 : size}
      weight={weight}
      color={color}
    />
  );
};

export default Icon;

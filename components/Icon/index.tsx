"use client";

import {
  ArrowRight,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  ThreadsLogo,
  List,
  ArrowUpRight,
  CaretDown,
  X,
  Play,
  Star,
  MapPin,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react";

type IconsType = {
  [key: string]: React.ElementType;
};

const icons: IconsType = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  list: List,
  "caret-down": CaretDown,
  close: X,
  play: Play,
  star: Star,
  location: MapPin,
  phone: Phone,
  email: EnvelopeSimple,
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
  size = 20,
  weight = "regular",
  color = "currentColor",
}: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={`inline-flex ${className || ""}`}
      size={size}
      weight={weight}
      color={color}
    />
  );
};

export default Icon;

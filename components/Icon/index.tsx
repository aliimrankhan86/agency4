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
  Lightning,
  Brain,
  ShieldCheckered,
  Handshake,
  Globe,
  Rocket,
  Check,
  DotOutline,
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
  lightning: Lightning,
  brain: Brain,
  shield: ShieldCheckered,
  handshake: Handshake,
  globe: Globe,
  rocket: Rocket,
  check: Check,
  "dot-outline": DotOutline,
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

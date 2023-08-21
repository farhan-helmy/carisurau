import type { FC } from "react";

interface BadgeProps {
  text: string;
  color: keyof typeof colorVariants;
}

const colorVariants = {
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
} as const;

const Badge: FC<BadgeProps> = ({ text, color }) => {
  return (
    <h3
      className={`${colorVariants[color]} font-base inline-flex items-center rounded-full px-3 py-1.5 text-sm`}
    >
      {text}
    </h3>
  );
};

export default Badge;

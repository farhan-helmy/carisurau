import type { FC } from "react";

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <h3 className="font-base inline-flex items-center rounded-full bg-green-100 px-3 py-1.5 text-sm text-green-800">
      {text}
    </h3>
  );
};

export default Badge;

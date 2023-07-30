import type { ComponentPropsWithRef } from "react";

// TODO: See if wanna stick with this or get better method. Maybe gain inspiration from current implimentation
type DivProps = ComponentPropsWithRef<"div">;

const SkeletonLoader: React.FC<DivProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={["animate-pulse", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default SkeletonLoader;

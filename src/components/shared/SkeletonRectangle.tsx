type Props = {
  lines?: number;
  gap?: number;
  height?: number;
  width?: string;
  className?: string;
  marginBottom?: number;
  marginTop?: number;
  flexDirection?: "column" | "row";
  // TODO: See if really need this? Because it sounds like too abstact :(
  isContainerWidthFit?: boolean;
};

const SkeletonRectangle: React.FC<Props> = ({
  gap = 4, // px
  lines = 1, // rename to something else. Maybe amount?
  height = 20, // px
  width = "w-full", // TODO: Is this enough for default
  className = "rounded-md bg-gray-200",
  marginBottom, // px
  marginTop, // px
  flexDirection = "column",
  isContainerWidthFit,
}) => {
  const items = new Array(lines || 1).fill("x");

  return (
    <div
      className="flex h-fit"
      style={{
        gap: gap,
        flexDirection: flexDirection,
        width: isContainerWidthFit ? "fit-content" : "100%",
      }}
    >
      {items.map((_, index) => {
        return (
          <div
            key={index}
            // TODO: Verify the code convention in this project for this
            style={{
              height: height,
              marginBottom: marginBottom,
              marginTop: marginTop,
            }}
            className={[width, className].join(" ")}
          />
        );
      })}
    </div>
  );
};

export default SkeletonRectangle;

type Props = {
  lines?: number;
  gap?: number; // px
  height?: number; // px
  width?: string;
  className?: string;
  marginBottom?: number; // px
  marginTop?: number; // px
  flexDirection?: "column" | "row";
};

const SkeletonRectangle: React.FC<Props> = ({
  gap = 4, 
  lines = 1,
  height = 20, 
  width = "w-full",
  className = "rounded-md bg-gray-200",
  marginBottom, 
  marginTop, 
  flexDirection = "column",
}) => {
  const items = new Array(lines).fill("x");

  return (
    <div
      className="flex h-fit"
      style={{
        gap: gap,
        flexDirection: flexDirection,
      }}
    >
      {items.map((_, index) => {
        return (
          <div
            key={index}
            style={{
              height: height,
              marginBottom: marginBottom,
              marginTop: marginTop,
            }}
            className={[width, className].join(' ')}
          />
        );
      })}
    </div>
  );
};

export default SkeletonRectangle;

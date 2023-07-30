type Props = {
  className?: string;
  size: number;
};

const SkeletonCircle = (props: Props) => {
  // use default style but allow override
  const className = props.className ?? "rounded-full flex-shrink-0 bg-gray-200";
  return (
    <div
      className={className}
      style={{ height: props.size, width: props.size }}
    />
  );
};

export default SkeletonCircle;

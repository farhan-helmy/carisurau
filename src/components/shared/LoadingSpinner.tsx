const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div
          className=" absolute h-4 w-4 rounded-full
                border-4 border-solid border-gray-200"
        ></div>
        <div
          className="absolute h-4 w-4 animate-spin rounded-full
                border-4 border-solid border-green-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

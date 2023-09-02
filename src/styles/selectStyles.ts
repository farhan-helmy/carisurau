const controlStyles = {
  base: "block w-full flex-1 rounded-md border border-gray-300 dark:border-gray-600 bg-input text-input-foreground pl-3 pr-2 group",
  focus: "ring-2 ring-indigo-500 ring-indigo-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded text-input-foreground",
  focus: "bg-indigo-200 dark:text-gray-700",
  selected: "bg-indigo-400 text-white",
};
const placeholderStyles = "text-muted-foreground pr-3"
const inputStyles = "text-input-foreground pr-3";
const singleValueStyles = "leading-7 pr-3";
const indicatorSeparatorStyles = "my-1.5 mr-2 bg-gray-300 dark:bg-gray-600";
const dropdownIndicatorStyles = "text-gray-300 hover:text-gray-400 group-focus-within:text-gray-500 dark:text-gray-500 dark:group-focus-within:text-gray-300";
const menuStyles = "p-1 mt-2 border border-border bg-input rounded-lg";
const noOptionsStyles = "text-muted p-2";
const clearIndicatorStyles = "px-2 text-gray-300 hover:text-gray-400 group-focus-within:text-gray-500 dark:text-gray-500 dark:group-focus-within:text-gray-300";

export { controlStyles, optionStyles, placeholderStyles, inputStyles, singleValueStyles, indicatorSeparatorStyles, dropdownIndicatorStyles, menuStyles, noOptionsStyles, clearIndicatorStyles };
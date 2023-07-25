import type { ElementType } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

type ToastType = "success" | "error" | "info" | "warning" | "default" | "dark";

const iconContext: { [key in ToastType]: string } = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
  default: "text-gray-500",
  dark: "text-gray-500",
};

const iconComponents: { [key in ToastType]: ElementType } = {
  success: CheckCircleIcon,
  error: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  warning: ExclamationCircleIcon,
  default: CheckCircleIcon,
  dark: CheckCircleIcon,
};

interface IconComponentProps {
  type: keyof typeof iconComponents;
}

const IconComponent = ({ type }: IconComponentProps) => {
  const IconComponentResolver = iconComponents[type];

  return (
    <IconComponentResolver
      className={`h-4 w-4 sm:h-8 sm:w-8 ${iconContext[type]}`}
    />
  );
};

interface Props {
  duration?: number;
}

const CustomToast = ({ duration }: Props) => {
  return (
    <div>
      <ToastContainer
        className="flex flex-col items-center justify-center sm:block"
        toastClassName={() =>
          "bg-white shadow-md flex relative p-1 rounded-md justify-between overflow-hidden cursor-pointer w-[20rem] sm:w-auto"
        }
        bodyClassName={() =>
          "md:text-md text-sm font-med p-4 sm:p-4 text-gray-800 flex justify-between items-center"
        }
        position="top-center"
        autoClose={duration || 2000}
        newestOnTop={true}
        icon={({ type }) => <IconComponent type={type} />}
        closeButton={false}
      />
    </div>
  );
};

export default CustomToast;

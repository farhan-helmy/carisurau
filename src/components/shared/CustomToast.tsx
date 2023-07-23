import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { type } from "os";

type ToastType = "success" | "error" | "info" | "warning" | "default" | "dark";

const iconContext: { [key in ToastType]: string } = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
  default: "text-gray-500",
  dark: "text-gray-500",
};

const CustomToast = () => {
  return (
    <div>
      <ToastContainer
        className="flex flex-col items-center justify-center"
        toastClassName={() =>
          "bg-white shadow-md flex relative p-1 min-h-2 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() =>
          "text-md font-med p-4 text-gray-800 flex justify-between items-center"
        }
        position="top-center"
        autoClose={2000}
        newestOnTop={true}
        icon={({ type }) =>
          "success" ? (
            <CheckCircleIcon className={`h-8 w-8 ${iconContext[type]}`} />
          ) : null
        }
        closeButton={false}
      />
    </div>
  );
};

export default CustomToast;

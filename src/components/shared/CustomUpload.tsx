import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useUploadThing } from "../../utils/uploadthing";
import { classNames, generateClientDropzoneAccept } from "uploadthing/client";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import "@uploadthing/react/styles.css";
import { ToastContainer, toast } from "react-toastify";
import CustomToast from "./CustomToast";

type ValidFileTypes = "image" | "video" | "audio" | "blob";

const fileTypes: ValidFileTypes[] = ["image", "video", "audio", "blob"];

function CustomUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    });

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        toast.success("Upload complete!");
        console.log(res);
      },
      onUploadError: () => {
        alert("error occurred while uploading");
      },
    }
  );

  const sizeConverter = (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i] || "Bytes"}`;
  };

  const removeFile = (file: FileWithPath) => {
    setFiles(files.filter((f) => f !== file));
  };

  return (
    <div>
      {/* This need to be imported here to render toast */}
      <CustomToast />
      <div
        className={classNames(
          "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2",
          isDragActive ? "bg-blue-600/10" : ""
        )}
      >
        <div className="text-center" {...getRootProps()}>
          <div className="flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
            >
              {`Choose files`}
              <input className="sr-only" {...getInputProps()} />
            </label>
            <p className="pl-1">{`or drag and drop`}</p>
          </div>
          <div className="h-[1.25rem]">
            <p className="text-xs leading-5 text-gray-600">todo size limit</p>
          </div>
          {files.length > 0 && (
            <div className="mt-4 flex items-center justify-center">
              <button
                className="flex h-10 w-36 items-center justify-center rounded-md bg-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!files) return;

                  void startUpload(files);
                }}
              >
                <span className="px-3 py-2 text-white">
                  {isUploading ? (
                    <Spinner />
                  ) : (
                    `Upload ${files.length} file${
                      files.length === 1 ? "" : "s"
                    }`
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {files.length > 0 && !isUploading && (
        <div className="mt-2">
          <ul className="mb-2 rounded-lg border px-2 pt-2">
            {files.map((file: FileWithPath) => (
              <li
                id="imagePreviewDiv"
                key={file.path}
                className="m-1 flex items-start justify-between rounded-md p-2"
              >
                <div className="ml-2 w-[80%] justify-center overflow-hidden text-xs sm:text-sm">
                  <p className="overflow-hidden text-ellipsis">{file.name}</p>
                  <p className="text-slate-500">{sizeConverter(file.size)}</p>
                </div>
                <button onClick={() => removeFile(file)} className="sm:pr-4">
                  <TrashIcon className="h-5 w-5 text-red-500" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const Spinner = () => {
  return (
    <svg
      className="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"
      />
    </svg>
  );
};

export default CustomUpload;

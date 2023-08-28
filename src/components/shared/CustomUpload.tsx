/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useCallback, useState } from "react";
import type { FileWithPath } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { classNames } from "uploadthing/client";
import { TrashIcon } from "@heroicons/react/24/outline";
import CustomToast from "./CustomToast";
import ProgressCircle from "./ProgressCircle";
import type { UploadThingFilePath } from "../AddSurauForm";
import { api } from "../../utils/api";
import { s3UploadHandler } from "../../pages/api/s3-upload";

type UploadedFileProps = {
  uploadedFileList: (
    value:
      | UploadThingFilePath[]
      | ((prev: UploadThingFilePath[]) => UploadThingFilePath[])
  ) => void;
  setUploadCompleted: (value: boolean) => void;
};

const sizeConverter = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i] || "Bytes"}`;
};

function CustomUpload({
  uploadedFileList,
  setUploadCompleted,
}: UploadedFileProps) {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);

  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = api.uploader.uploadFile.useMutation();

  // const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
  //   "imageUploader",
  //   {
  //     onClientUploadComplete: (res) => {
  //       toast.success("Upload complete!");
  //       setFiles([]);
  //       setProgress(0);
  //       uploadedFileList(res || []);
  //       setUploadCompleted(true);
  //     },
  //     onUploadError: (e) => {
  //       toast.error(`Error occurred while uploading. ${e.message}`);
  //       setProgress(0);
  //     },
  //     onUploadProgress: (progress: number) => {
  //       setProgress(progress);
  //     },
  //   }
  // );

  const handleUploadImage = (files: File[]) => {
    const res = s3UploadHandler(files);
    console.log(res);
    // const sendUploadFile = [];

    // for (const file of files) {
    //   sendUploadFile.push({
    //     file: file,
    //     filteredName: file.name.replace(/[^a-zA-Z0-9.]/g, "_"),
    //   });
    // }

    // uploadImage
    //   .mutateAsync(sendUploadFile)
    //   .then((res) => {
    //     console.log(res);
    //     uploadedFileList(res);
    //     setUploadCompleted(true);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // setProgress(0);
    // const fileList = [];
    // try {
    //   for (const file of files) {
    //     const filteredFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
    //     const command = new PutObjectCommand({
    //       Bucket: "carisuraustagingbucket",
    //       Key: filteredFileName,
    //       Body: file,
    //     });
    //     const res = await client.send(command);
    //     console.log(res);
    //     fileList.push({
    //       fileUrl: `${env.S3_URL}/${filteredFileName}`,
    //       fileKey: filteredFileName,
    //     });
    //     setFiles([]);
    //     setProgress(0);
    //     setUploadCompleted(true);
    //     console.log(`Uploaded ${filteredFileName} to S3.`);
    //   }
    //   uploadedFileList(fileList);
    // } catch (error) {
    //   console.error("Error uploading images to S3:", error);
    // }
  };

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
    });

  const removeFile = (file: FileWithPath) => {
    setFiles(files.filter((f) => f !== file));
  };

  return (
    <div>
      {/* This need to be imported here to render toast */}
      <CustomToast />
      <div
        className={classNames(
          "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2",
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
            <p className="text-xs leading-5 text-gray-600">
              Images up to 4MB, max 10 files
            </p>
          </div>
          {files.length > 0 && (
            <div className="mt-4 flex items-center justify-center">
              {!isUploading ? (
                <button
                  className="flex h-10 w-36 items-center justify-center rounded-md bg-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!files) return;

                    void handleUploadImage(files);
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
              ) : (
                <div>
                  <ProgressCircle progress={progress} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {files.length > 0 && !isUploading && (
        <>
          <div className="mt-2 text-center text-xs italic">
            Please press upload button first to upload the files
          </div>
          <div className="mt-2">
            <ul className="mb-2 rounded-lg border pt-2">
              {files.map((file: FileWithPath) => (
                <li
                  id="imagePreviewDiv"
                  key={file.path}
                  className="m-1 flex items-start justify-between rounded-md p-2"
                >
                  <div className="ml-2 max-w-[13rem] justify-center overflow-hidden text-xs sm:max-w-none sm:text-sm">
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
        </>
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
